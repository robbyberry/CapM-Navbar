$(document).ready(function(){
    var st = `<div>
  
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav ">
      <li> <a class="navbar-brand" href="https://www.golinks.io/dashes" rel="noopener noreferrer" target="_parent">
            <img
              src="https://imgdrop.imgix.net/78cd98232496454f991c20be2d28dc01.svg"
            />
          </a>
      </li>
        <li>
          <a href="#">Company-Wide</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://www.golinks.io/inventorydash" rel="noopener noreferrer" target="_parent" >Inventory Dashboard</a></li>
              <li><a href="https://www.golinks.io/totalco" rel="noopener noreferrer" target="_parent" >Total Co Metrics</a></li>
              <li><a href="https://www.golinks.io/productpillars" rel="noopener noreferrer" target="_parent" >Product Pillars</a></li>
              <li><a href="https://www.golinks.io/dailymetrics" rel="noopener noreferrer" target="_parent" >Daily Performance Email</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Pipeline & Portfolio</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://www.golinks.io/expecteddebt" rel="noopener noreferrer" target="_parent" >Expected Debt</a></li>
              <li><a href="https://www.golinks.io/bbanalytics" rel="noopener noreferrer" target="_parent" >BB Analytics</a></li>
              
   
            </ul>
          </div>
        </li>
        <li>
          <a href="#">BPO Metrics</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://www.golinks.io/sse2e" rel="noopener noreferrer" target="_parent" >S&S End-to-End</a></li>
              <li><a href="https://www.golinks.io/elatracking" rel="noopener noreferrer" target="_parent" >ELA Tracking</a></li>
              <li><a href="https://www.golinks.io/cepscorecard" rel="noopener noreferrer" target="_parent" >S&S CEP Scorecard</a></li>
              <li><a href="https://www.golinks.io/resalescorecard" rel="noopener noreferrer" target="_parent" >Resale Scorecard</a></li>
              <li><a href="https://www.golinks.io/fsscorecard" rel="noopener noreferrer" target="_parent" >Fulfillment Scorecard</a></li>
              <li><a href="https://www.golinks.io/acqcti" rel="noopener noreferrer" target="_parent" >Acquisition Customer Trust Indicators</a></li>
               <li><a href="https://www.golinks.io/resalecti" rel="noopener noreferrer" target="_parent" >Resale Customer Trust Indicators</a></li>
               <li><a href="https://www.golinks.io/ssmortgage" rel="noopener noreferrer" target="_parent" >S&S Mortgage Tracking</a></li>
            </ul>
          </div>
        </li>
         <li>
          <a href="#">Deal Team Dashboards</a>
          <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-nav-header">Buyer Product</li>
                            <li><a href="https://www.golinks.io/buyerokr" rel="noopener noreferrer" target="_parent" >Buyer OKRs</a></li>
                            <li><a href="https://www.golinks.io/bwod-filterable-funnel" rel="noopener noreferrer" target="_parent" >BwOD Funnel (Filtered)</a></li>
                            <li><a href="https://www.golinks.io/bwod-funnel" rel="noopener noreferrer" target="_parent" >BwOD User Funnel</a></li>
                            <li><a href="https://www.golinks.io/buyerwaterfall" rel="noopener noreferrer" target="_parent" >Buyer Waterfall Funnel Segmentation</a></li>
                            <li><a href="https://www.golinks.io/winning-offers-epod" rel="noopener noreferrer" target="_parent" >Winning Offers EPOD</a></li>              
                            <li><a href="http://www.golinks.io/buyer-offer-funnel" rel="noopener noreferrer" target="_parent" >Offer Funnel by Source</a></li>
                        <li class="uk-nav-divider"></li>
                        <li class="uk-nav-header">Buyer Ops</li>
                            <li><a href="https://www.golinks.io/agentopsbuyerperformance" rel="noopener noreferrer" target="_parent" >Agent Ops Buyer Performance</a></li>
                            <li><a href="https://www.golinks.io/cepqbpilot" rel="noopener noreferrer" target="_parent" >CEP-as-QB Pilot</a></li>
                            <li><a href="https://www.golinks.io/touragents" rel="noopener noreferrer" target="_parent" >Tour Agents Overview</a></li>
                        <li class="uk-nav-divider"></li>
                        <li class="uk-nav-header">Opendoor Complete</li>   
                            <li><a href="https://www.golinks.io/buysell2022okr" rel="noopener noreferrer" target="_parent" >Buy & Sell 2022 OKRs</a></li>
                    </ul>
                </div>
            </li>
             <li>
          <a href="CapM - Placeholder"></a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://www.golinks.io/exceptions" rel="noopener noreferrer" target="_parent" >WBR Metrics Report</a></li>
              <li><a href="https://www.golinks.io/inventorythroughput" rel="noopener noreferrer" target="_parent" >Inventory Throughput</a></li>
              <li><a href="https://www.golinks.io/securitysystems" rel="noopener noreferrer" target="_parent" >T&S Security Systems Dashboard</a></li>
              <li><a href="https://www.golinks.io/incidents" rel="noopener noreferrer" target="_parent" >T&S Incident Dashboard</a></li>
              <li><a href="https://www.golinks.io/identityprogram" rel="noopener noreferrer" target="_parent" >T&S Program</a></li>
              <li><a href="https://www.golinks.io/identityoperation" rel="noopener noreferrer" target="_parent" >T&S Identity Dashboard (Ops)</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">CapM - Placeholder</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://www.golinks.io/growthokrs" rel="noopener noreferrer" target="_parent" >Consumer Growth OKRs</a></li>
              <li><a href="https://www.golinks.io/onboardingdash" rel="noopener noreferrer" target="_parent" >Onboarding Flow Dashboard</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</div>
    `
    $("#navbarHere").ready(function(){
        $("#navbarHere").append(st);
    });

});
