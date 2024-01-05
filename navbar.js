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
              <li><a href="https://app.mode.com/opendoor/reports/2c3dc1a5dbaa" rel="noopener noreferrer" target="_parent" >Expected Debt</a></li>
              <li><a href="https://www.golinks.io/currinv" rel="noopener noreferrer" target="_parent" >Current Inventory</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/96fbd02961c4" rel="noopener noreferrer" target="_parent" >UTI Inventory</a></li>
                <li class="uk-nav-divider"></li>
                   <li class="uk-nav-header">Pipeline</li>
              <li><a href="https://app.mode.com/opendoor/reports/3cdd784d4114" rel="noopener noreferrer" target="_parent" >OSN Acquisition Pipeline</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/d089b8cc7ce9" rel="noopener noreferrer" target="_parent" >OSN Resale Pipeline</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Ops Dashboards</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
                <li class="uk-nav-header">Ops Favorites</li>
              <li><a href="https://app.mode.com/opendoor/reports/1bfb6bc17c2a" rel="noopener noreferrer" target="_parent" >Ops Master File</a></li>
              <li class="uk-nav-divider"></li>
                   <li class="uk-nav-header">Reporting</li>
              <li><a href="https://app.mode.com/opendoor/reports/6a02235aa34f" rel="noopener noreferrer" target="_parent" >Term Resold Reports</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/547ce1f1cad0" rel="noopener noreferrer" target="_parent" >Facility Asset Schedules</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/99e7d90b4f23" rel="noopener noreferrer" target="_parent" >Reporting Tokens Not Allocated</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/74b797c881ac" rel="noopener noreferrer" target="_parent" >Mezz Pending Releases</a></li>
              <li class="uk-nav-divider"></li>
                   <li class="uk-nav-header">Valuations</li>
              <li><a href="https://app.mode.com/opendoor/reports/05a82edd32e6" rel="noopener noreferrer" target="_parent" >BPO Metrics Report</a></li>
               <li><a href="" rel="noopener noreferrer" target="_parent" >All Completed Valuations</a></li>
            </ul>
          </div>
        </li>
         <li>
          <a href="#">Deal Dashboards</a>
          <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
                        <li class="uk-nav-header">Deal Favorites</li>
                            <li><a href="https://app.mode.com/opendoor/reports/e3e8a964505f" rel="noopener noreferrer" target="_parent" >Deal Team Master File</a></li>
                            <li><a href="https://app.mode.com/opendoor/reports/2b6c75fcea53" rel="noopener noreferrer" target="_parent" >KKR Biweekly Report</a></li>
                            <li><a href="https://app.mode.com/opendoor/reports/d48d547b9e6cs" rel="noopener noreferrer" target="_parent" >Mezz Queries</a></li>
                            <li><a href="https://app.mode.com/opendoor/reports/cb20370876fe" rel="noopener noreferrer" target="_parent" >Securitization Data Tape</a></li>
                        <li class="uk-nav-divider"></li>
                        <li class="uk-nav-header">Other - Placeholder</li>
                    </ul>
                </div>
            </li>
             <li>
          <a href="#">Portfolio Health</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://app.mode.com/opendoor/reports/5a607d99fc4b" rel="noopener noreferrer" target="_parent" >Borrowing Base Analytics</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/538785905c23" rel="noopener noreferrer" target="_parent" >3mo Trailing Gross Margin</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/f2338b9c044d" rel="noopener noreferrer" target="_parent" >Aged Collateral Test</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Transactions & Cash</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://app.mode.com/opendoor/reports/521e62a4051d" rel="noopener noreferrer" target="_parent" >Transaction Details Check</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/a01de54edeae" rel="noopener noreferrer" target="_parent" >Missing Transaction Details</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Company-Wide</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://app.mode.com/opendoor/reports/8673f1f6e839" rel="noopener noreferrer" target="_parent" >Inventory Dashboard</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/0d779041574e" rel="noopener noreferrer" target="_parent" >Market Metrics Breakdown</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/dd1674bb5af6" rel="noopener noreferrer" target="_parent" >March to 4k Contracts</a></li>
              <li><a href="https://app.mode.com/opendoor/reports/9e4ca0e16750" rel="noopener noreferrer" target="_parent" >WBR Metrics Report</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Non-Mode Links</a>
          <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav">
              <li><a href="https://docs.google.com/spreadsheets/d/1NE__j2wCzFtNpYVqTWrbUBnTbTrbAxe30vFfPkAGWRQ/edit#gid=0" rel="noopener noreferrer" target="_parent" >Lender Finance Exception Reporting</a></li>
              <li><a href="https://solutions.housecanary.com/login" rel="noopener noreferrer" target="_parent" >House Canary Portal</a></li>
              <li><a href="https://portal.clearcapital.com/" rel="noopener noreferrer" target="_parent" >Clear Capital Portal</a></li>
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
