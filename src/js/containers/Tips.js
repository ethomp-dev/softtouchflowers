import React from 'react'

export default class Tips extends React.Component {
  componentDidMount () {
    document.title = 'Soft Touch Flowers | Wedding Tips';
  }

  render () {
    const float = { float: 'right' }

    return (
      <div class='container'>
        <h1>Wedding Tips</h1>

        <div class='row'>
          <div class='col-md-6'>
            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse1' style={float}>Read More</a>
                  <h4 class='panel-title'>Envision the Big Picture</h4>
                </div>
                <div id='collapse1' class='panel-collapse collapse'>
                  <div class='panel-body'>Sometimes couples just see the centerpieces and the table settings, but don’t visualize the entire reception area where the guests will spend most of the evening. For example: The deck at beautiful Bella Collina Mansion overlooks Belews Creek Lake – a tall/heavy arrangement would obstruct the awesome view.</div>
                </div>
              </div>
            </div>

            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse2' style={float}>Read More</a>
                  <h4 class='panel-title'>Trust your Floral Designer</h4>
                </div>
                <div id='collapse2' class='panel-collapse collapse'>
                  <div class='panel-body'>We want to make your wedding absolutely breathtaking. So relax, put your trust in your vendors; and remember that you have chosen amazing talent. If you communicate your vision for your special day: your likes and dislikes, and what you expect – your designer will create your vision.</div>
                </div>
              </div>
            </div>

            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse3' style={float}>Read More</a>
                  <h4 class='panel-title'>Reuse Bouquets for Ceremony Arrangements</h4>
                </div>
                <div id='collapse3' class='panel-collapse collapse'>
                  <div class='panel-body'>Bridal bouquets and aisle flowers can be re-purposed into beautiful table arrangements for the reception. We can create this while your guests are in cocktail hour.</div>
                </div>
              </div>
            </div>

            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse4' style={float}>Read More</a>
                  <h4 class='panel-title'>Book your Florist First</h4>
                </div>
                <div id='collapse4' class='panel-collapse collapse'>
                  <div class='panel-body'>Couples should begin their wedding journey process by speaking to one vendor from each area (ie: florist, DJ, photographer, etc.) before booking anyone. This way they can get an idea of what things cost and perhaps that would make budgeting easier. So many times a bride may not include the cost of flowers in her original budget. It’s much easier for us to assist the bridal couple with their floral designs when we know the budget up front.</div>
                </div>
              </div>
            </div>

            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse5' style={float}>Read More</a>
                  <h4 class='panel-title'>Communicate with your Florist</h4>
                </div>
                <div id='collapse5' class='panel-collapse collapse'>
                  <div class='panel-body'>Bring a lot of pictures to your floral consultation – this will assist in conveying what you do and don’t want your floral designs to look like. Sometimes where a bride tries to match her flowers to the color of the bridesmaids’ dresses, the florist can assist in choosing an accent color to complement their dresses. So the bouquets don’t blend in with their dresses – makes for prettier pictures!</div>
                </div>
              </div>
            </div>
          </div>

          <div class='col-md-6'>
            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse6' style={float}>Read More</a>
                  <h4 class='panel-title'>Consider Expensive Blooms</h4>
                </div>
                <div id='collapse6' class='panel-collapse collapse'>
                  <div class='panel-body'>Don’t be afraid of the more expensive flowers. Flowers like cattleya orchids and peonies are more pricey, but they also cover more floral space and have bigger impact on the overall design.</div>
                </div>
              </div>
            </div>

            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse7' style={float}>Read More</a>
                  <h4 class='panel-title'>Sometimes, Trying to Save Money isn't worth the Stress</h4>
                </div>
                <div id='collapse7' class='panel-collapse collapse'>
                  <div class='panel-body'>Brides (who try to DIY their flowers) may purchase dozens of glass vases for centerpieces, only to become overwhelmed. We have gotten frantic calls asking us to take over the stress of these “DIY” projects, which often times becomes more expensive than hiring a Professional Florist from the start!</div>
                </div>
              </div>
            </div>

            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse8' style={float}>Read More</a>
                  <h4 class='panel-title'>Finalize Wedding Flowers well in Advance</h4>
                </div>
                <div id='collapse8' class='panel-collapse collapse'>
                  <div class='panel-body'>Flowers come in from all over the world, so it is very hard to contact farms across the world and have flowers arrive within one or even two weeks ahead of your wedding. Leave at least a six week window ahead of your wedding to make sure everything comes in. Sometimes due to weather, etc.; we may have to substitute a flower, as well.</div>
                </div>
              </div>
            </div>

            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse9' style={float}>Read More</a>
                  <h4 class='panel-title'>Choose the Correct Size Bouquet for You</h4>
                </div>
                <div id='collapse9' class='panel-collapse collapse'>
                  <div class='panel-body'>Brides may think “The larger the bouquet, the better!”. But some times the larger bouquet covers so much of the bridal gown that it conflicts the overall design. Do you really want to carry a bouquet so heavy and huge? Just think about the size and comfort when it comes to your special bridal bouquet. If you are having a bridal portrait made, this is an excellent chance to try the size and weight of your bouquet ahead of your wedding!</div>
                </div>
              </div>
            </div>

            <div class='panel-group'>
              <div class='panel panel-default'>
                <div class='panel-heading'>
                  <a data-toggle='collapse' href='#collapse10' style={float}>Read More</a>
                  <h4 class='panel-title'>Envision the Entire Look of your Reception</h4>
                </div>
                <div id='collapse10' class='panel-collapse collapse'>
                  <div class='panel-body'>What is underneath the reception centerpieces is very important. Linens don’t just complement the look, they complete them. From table runners, to overlays, and underlays – the correct design will make the flowers flourish on the tables.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
