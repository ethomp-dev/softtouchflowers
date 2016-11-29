// modules
var fs = require('fs');
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// global variables
var galleryImages = [],
    galleryFolders = [],
    galleriesSrcFolder = './public/galleries/',
    galleriesBuildFolder = './galleries/';

// begin router callbacks
router.get('/', function(request, response, next) {
  response.render('index', {'title': 'Welcome', 'page_name': 'index'});
});

router.get('/about', function(request, response, next) {
  response.render('about', {'title': 'Our Story', 'page_name': 'about'});
});

router.get('/weddings', function(request, response, next) {
  renderGalleryFolders(response, 'weddings/', 'weddings', 'Weddings');
});

router.get('/weddings_gallery', function(request, response, next) {
  var folder = request.param('folder');
  renderGallery(response, 'weddings/' + folder + '/', 'galleryview', folder + ' Weddings');
});

router.get('/freshflowers', function(request, response, next) {
  renderGallery(response, 'freshflowers/', 'fresh', 'Fresh Flowers');
});

router.get('/silkflowers', function(request, response, next) {
  renderGallery(response, 'silkflowers/', 'silk', 'Silk Flowers');
});

router.get('/sympathyflowers', function(request, response, next) {
  renderGallery(response, 'sympathyflowers/', 'sympathy', 'Sympathy Flowers');
});

router.get('/contact', function(request, response, next) {
  response.render('contact', {'title': 'Contact Us', 'page_name': 'contact'});
});

router.get('/submit', function(request, response, next) {
  sendEmail(request.param('name'), request.param('email'), request.param('message'));
  response.redirect('/contact');
});
// end router callbacks

/**
 * function to find all the gallery images for the given gallery folder
 * then render the gallery page with those images.
 * @param response the response object from Router callback
 * @param folder the folder for the gallery
 * @param view the page to be rendered
 * @param title the title of the page to be rendered
 */
function renderGallery(response, folder, view, title) {
  var srcFolder = galleriesSrcFolder + folder,
      buildFolder = galleriesBuildFolder + folder;
  galleryImages = [];

  fs.readdir(srcFolder, function(err, images) {
    if (err) throw err;
    images.forEach(function(image) {
      galleryImages.push(buildFolder + image);
    });
    response.render(view, {'title': title, 'page_name': 'services', 'gallery': galleryImages});
  });
}

/**
 * function to find all the gallery folders for the given gallery type
 * then render the gallery page with those folders.
 * @param response the response object from Router callback
 * @param parentFolder the folder for the gallery type
 * @param view the page to be rendered
 * @param title the title of the page to be rendered
 */
function renderGalleryFolders(response, parentFolder, view, title) {
  var parentSrcFolder = galleriesSrcFolder + parentFolder,
      parentBuildFolder = galleriesBuildFolder + parentFolder,
      childSrcFolder, childBuildFolder;
  galleryFolders = [];

  fs.readdir(parentSrcFolder, function(err, childFolders) {
    if (err) throw err;

    childFolders.forEach(function(folder) {
      childSrcFolder = parentSrcFolder + folder + '/';
      childBuildFolder = parentBuildFolder + folder + '/';

      var images = fs.readdirSync(childSrcFolder);

      if (images.length > 0) {
        firstImage = childBuildFolder + images[0];
        galleryFolders.push({ 'name': folder, 'path': childBuildFolder, 'image': firstImage });
      }
    });

    response.render(view, {'title': title, 'page_name': 'services', 'galleries': galleryFolders});
  });
}

/**
 * function send an email via nodemailer
 * @param senderName the name of the sender
 * @param senderAddress the email address of the sender
 * @param message the message of the email
 */
function sendEmail(senderName, senderAddress, message) {
  var transporter = nodemailer.createTransport();

  var mailOptions = {
      from: senderName + ' <' + senderAddress + '>',
      to: 'ethomp54@uncc.edu',
      subject: 'New Message from ' + senderName,
      text: message
  };

  transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
  });
}

module.exports = router;
