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
          <a href="#">Pipeline & Inventory</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                 <li class="uk-nav-header">Portfolio</li>
              <li><a href="https://www.golinks.io/expecteddebt" rel="noopener noreferrer" target="_parent" >Expected Debt</a></li>
              <li><a href="https://www.golinks.io/currinv" rel="noopener noreferrer" target="_parent" >Current Inventory</a></li>
              <li><a href="https://www.golinks.io/utidata" rel="noopener noreferrer" target="_parent" >UTI Inventory</a></li>
                <li class="uk-nav-divider"></li>
                   <li class="uk-nav-header">Pipeline</li>
              <li><a href="https://www.golinks.io/osnpipeline" rel="noopener noreferrer" target="_parent" >OSN Acquisition Pipeline</a></li>
              <li><a href="https://www.golinks.io/osnresalepipeline" rel="noopener noreferrer" target="_parent" >OSN Resale Pipeline</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Ops Dashboards</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-nav-header">Ops Favorites</li>
              <li><a href="https://www.golinks.io/opsmasterfile" rel="noopener noreferrer" target="_parent" >Ops Master File</a></li>
              <li class="uk-nav-divider"></li>
                   <li class="uk-nav-header">Reporting</li>
              <li><a href="https://www.golinks.io/termresold" rel="noopener noreferrer" target="_parent" >Term Resold Reports</a></li>
              <li><a href="https://www.golinks.io/assetschedules" rel="noopener noreferrer" target="_parent" >Facility Asset Schedules</a></li>
              <li><a href="https://www.golinks.io/notallocated" rel="noopener noreferrer" target="_parent" >Reporting Tokens Not Allocated</a></li>
              <li><a href="https://www.golinks.io/mezzpendingreleases" rel="noopener noreferrer" target="_parent" >Mezz Pending Releases</a></li>
              <li class="uk-nav-divider"></li>
                   <li class="uk-nav-header">Valuations</li>
              <li><a href="https://www.golinks.io/bpometrics" rel="noopener noreferrer" target="_parent" >BPO Metrics Report</a></li>
               <li><a href="https://www.golinks.io/completebpos" rel="noopener noreferrer" target="_parent" >All Completed Valuations</a></li>
            </ul>
          </div>
        </li>
         <li>
          <a href="#">Deal Dashboards</a>
          <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-nav-header">Deal Favorites</li>
                            <li><a href="https://www.golinks.io/dealmasterfile" rel="noopener noreferrer" target="_parent" >Deal Team Master File</a></li>
                            <li><a href="https://www.golinks.io/kkrbiweekly" rel="noopener noreferrer" target="_parent" >KKR Biweekly Report</a></li>
                            <li><a href="https://www.golinks.io/mezzqueries" rel="noopener noreferrer" target="_parent" >Mezz Queries</a></li>
                        <li class="uk-nav-divider"></li>
                        <li class="uk-nav-header">Other - Placeholder</li>
                    </ul>
                </div>
            </li>
             <li>
          <a href="#">Portfolio Health</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://www.golinks.io/bbanalytics" rel="noopener noreferrer" target="_parent" >Borrowing Base Analytics</a></li>
              <li><a href="https://www.golinks.io/3momargin" rel="noopener noreferrer" target="_parent" >3mo Trailing Gross Margin</a></li>
              <li><a href="https://www.golinks.io/agedcollat" rel="noopener noreferrer" target="_parent" >Aged Collateral Test</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Transactions & Cash</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://www.golinks.io/tdcheck" rel="noopener noreferrer" target="_parent" >Transaction Details Check</a></li>
              <li><a href="https://www.golinks.io/missingtd" rel="noopener noreferrer" target="_parent" >Missing Transaction Details</a></li>
            </ul>
          </div>
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
          <a href="#">Non-Mode Links</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://www.golinks.io/exceptions" rel="noopener noreferrer" target="_parent" >Lender Finance Exception Reporting</a></li>
              <li><a href="https://www.golinks.io/hcportal" rel="noopener noreferrer" target="_parent" >House Canary Portal</a></li>
              <li><a href="https://www.golinks.io/ccportal" rel="noopener noreferrer" target="_parent" >Clear Capital Portal</a></li>
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
