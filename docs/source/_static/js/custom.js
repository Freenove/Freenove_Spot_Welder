// JavaScript Document
$(document).ready(function () {
    setNavBar();
    NaviResize();

});
$(window).resize(function () {
    NaviResize();
});

function NaviResize() {
    var navWidth = $('.wy-nav-side').width() + $('.wy-nav-content').outerWidth(true) + $('.wy-nav-side').offset().left;
    var navHeight = $(".extrabody-content").height();
    var navItemWidth = navWidth / 7;
    navItemWidth = navItemWidth < 60 ? 60 : navItemWidth;
    var navItemHeight = navItemWidth / 5;
    $(".nav_fn>ul>li").width(navItemWidth);
    $(".nav_fn>ul>li").height($(".extrabody-content").height);
    $(".nav_fn>ul a").css("font-size", navItemWidth * 0.15 + "px");

}

let navBarHtml =
    `
  <div class="nav_fn">
    <ul>
        <!-- <li class="navLogo"><a href="/index.html"></a></li> -->
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/"  target="_blank" class="dropBtn">Home</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="#" class="dropBtn">Store</a>
                <div class="dropDownContent">
                    <a href="https://store.freenove.com/" target="_blank">Official </a>
                    <a href="https://freenove.com/store" target="_blank">Amazon </a>
                    <a href="https://freenove.com/store" target="_blank">eBay </a>
                    <a href="https://freenove.aliexpress.com/store" target="_blank">AliExpress </a>
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/tutorial.html#" target="_blank" class="dropBtn">Tutorial</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/support.html#" target="_blank" class="dropBtn">Support</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/app.html#" target="_blank" class="dropBtn">App</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/contact.html#" target="_blank" class="dropBtn">Contact</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/about.html#" target="_blank" class="dropBtn">About</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        
            <!-- <li id="txt">
                <div class="navDropDown">
                    <a href="https://freenove.com/" class="dropBtn">Welcome</a>
                    <div class="dropDownContent">
                    </div>
                </div>
            </li> -->
       
    </ul>
</div>
`;

let footerHtml = `
<div style="border-top: 1px solid #ccc; ">
    <br/>
    <div id="copy_right" style="float: left;">
        © CopyRight 2016 - 2025
    </div>
    <div style="float: right;">
        Need help? Contact <a href="mailto:support@freenove.com">support@freenove.com</a> 
    </div>
    <br/>
</div>`;

let pageHeaderHtml=`
Need help? Contact <a href="mailto:support@freenove.com">support@freenove.com</a>
`;

function setNavBar() {
    let navBar = document.getElementById('navContent');
    navBar.innerHTML = navBarHtml;
}

function setPageLogo() {
    var link =      document.querySelector("link[rel*='icon']") ||      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = "https://cdn.jsdelivr.net/gh/Freenove/freenove-docs/docs/source/_static/images/freenove_logo_tag_icon.png";
    // link.href = "https://raw.githubusercontent.com/Freenove/freenove-docs/refs/heads/main/docs/source/_static/images/freenove_logo_tag_icon.png";
    document.getElementsByTagName("head")[0].appendChild(link);
}
function setHomeButtonPicture() {
    let home_button = document.getElementsByClassName('logo');
    // console.log(home_button);
    home_button[0].src = "https://cdn.jsdelivr.net/gh/Freenove/freenove-docs/docs/source/_static/images/freenove_logo_home_button.png";
    // home_button[0].src = "https://raw.githubusercontent.com/Freenove/freenove-docs/refs/heads/main/docs/source/_static/images/freenove_logo_home_button.png";
}
window.onload = function () {    
    // console.log('window.onload');
    // setPageLogo();
    // setHomeButtonPicture();

    let footer_content = document.getElementById('footer_content');
    footer_content.innerHTML = footerHtml;
    $("#copy_right").text("© Copyright 2016 - " + new Date().getFullYear() + ", Freenove")

    let pageHeaderContent = document.getElementById('pageHeaderContent');
    pageHeaderContent.innerHTML = pageHeaderHtml;
};

// console.log('freenove');

/* ---------------------------------------------------------------------------------------------- */
/* description: About The One-Click Copy Button

 * author: vegetable-syc

 * date: 2025/05/30
 */

// Add a copy button to the code.
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('div[class^="highlight-"]').forEach(function(codeBlock) {

    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(faLink);

    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.title = 'Copy to clipboard';
    copyButton.innerHTML = '<i style="position:relative; top:3px;" class="far fa-copy copy-icon"></i>';
    
    codeBlock.style.position = 'relative';
    copyButton.style.position = 'absolute';
    copyButton.style.top = '5px';
    copyButton.style.right = '10px';
    copyButton.style.cursor = 'pointer';
    codeBlock.appendChild(copyButton);
    
    copyButton.style.display = 'flex';
    copyButton.style.alignItems = 'center';
    copyButton.style.justifyContent = 'center';

    copyButton.addEventListener('click', function() {
      // Clone the entire pre node to avoid modifying the original DOM
      const originalPre = codeBlock.querySelector('pre');
      const tempPre = originalPre.cloneNode(true); // Deep clone
      
      // Remove line number elements (common class names)
      const lineNumbers = tempPre.querySelectorAll('.linenos, .lineno, .ln');
      lineNumbers.forEach(el => el.remove());
      
      // Get processed text
      const codeContent = tempPre.innerText;
      
      navigator.clipboard.writeText(codeContent).then(() => {
        copyButton.innerHTML =  '<i style="position:relative; top:3px;" class="fas fa-check"></i>';
        setTimeout(() => copyButton.innerHTML = '<i style="position:relative; top:3px;" class="far fa-copy copy-icon"></i>', 500);
      });
    });
  });
});
/* ---------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------- */
/* description: About Online Document Navigation

 * author: vegetable-syc

 * date: 2025/06/05
 */

document.addEventListener('DOMContentLoaded', function() {
    const URL_PREFIX = "https://docs.freenove.com/projects/";
    const URL_SUFFIX = "/en/latest/";

    // List FNK projects
    const fnkMap = {
        "fnk0017": { 
            title: "Freenove Ultimate Starter Kit (Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0017${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0019": { 
            title: "Freenove Super Starter Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0019${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0020": { 
            title: "Freenove Ultimate Starter Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0020${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0022": { 
            title: "Freenove Basic Starter Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0022${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0023": { 
            title: "Freenove LCD1602 Starter Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0023${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0024": { 
            title: "Freenove Ultrasonic Starter Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0024${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0025": { 
            title: "Freenove RFID Starter Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0025${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0030": { 
            title: "Freenove Quadruped Robot Kit with Remote(Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0030${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0031": { 
            title: "Freenove Hexapod Robot Kit with Remote(Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0031${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0034": { 
            title: "Freenove RFID Starter Kit V2.0 (Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0034${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0037": { 
            title: "Freenove Micro:Rover Kit for BBC micro:bit V2", url: `${URL_PREFIX}fnk0037${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0041": { 
            title: "Freenove 4WD Car Kit(Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0041${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0042": { 
            title: "Freenove Robot Ant Kit(Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0042${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0043": { 
            title: "Freenove 4WD Smart Car Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0043${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0045": { 
            title: "Freenove Ultimate Starter Kit for BBC micro:bit V2", url: `${URL_PREFIX}fnk0045${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0046": { 
            title: "Freenove Super Starter Kit for ESP32-WROVER CAM", url: `${URL_PREFIX}fnk0046${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0047": { 
            title: "Freenove Ultimate Starter Kit for ESP32-WROVER CAM", url: `${URL_PREFIX}fnk0047${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0050": { 
            title: "Freenove Robot Dog Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0050${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0052": { 
            title: "Freenove Big Hexapod Robot Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0052${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0053": { 
            title: "Freenove 4WD Car Kit for ESP32-WROVER CAM", url: `${URL_PREFIX}fnk0053${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0054": { 
            title: "Freenove Projects Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0054${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0058": { 
            title: "Freenove Ultimate Starter Kit for Raspberry Pi Pico 1 2 W H WH", url: `${URL_PREFIX}fnk0058${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0059": { 
            title: "Freenove Projects Kit (Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0059${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0060": { 
            title: "Freenove ESP32-WROVER CAM Board", url: `${URL_PREFIX}fnk0060${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0061": { 
            title: "Freenove Basic Starter Kit for ESP32-WROVER CAM", url: `${URL_PREFIX}fnk0061${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0062": { 
            title: "Freenove Robot Dog Kit for ESP32-WROVER CAM", url: `${URL_PREFIX}fnk0062${URL_SUFFIX}`, category: "Robotics"
        },
        "fnk0063": { 
            title: "Freenove Super Starter Kit for Raspberry Pi Pico 1 2 W H WH", url: `${URL_PREFIX}fnk0063${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0064": { 
            title: "Freenove Basic Starter Kit for Raspberry Pi Pico 1 2 W H WH", url: `${URL_PREFIX}fnk0064${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0065": { 
            title: "Freenove Raspberry Pi Pico (W) Board with Headers", url: `${URL_PREFIX}fnk0065${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0066": { 
            title: "Freenove Complete Starter Kit for Raspberry Pi", url: `${URL_PREFIX}fnk0066${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0067": { 
            title: "Freenove Control Board (Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0067${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0070": { 
            title: "Freenove BBC micro:bit V2 Board", url: `${URL_PREFIX}fnk0070${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0071": { 
            title: "Freenove Super Starter Kit for BBC micro:bit V2", url: `${URL_PREFIX}fnk0071${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0072": { 
            title: "Freenove Basic Starter Kit for BBC micro:bit V2", url: `${URL_PREFIX}fnk0072${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0073": { 
            title: "Freenove Ultimate Starter Kit for ESP8266", url: `${URL_PREFIX}fnk0073${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0074": { 
            title: "Freenove Super Starter Kit for ESP8266", url: `${URL_PREFIX}fnk0074${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0075": { 
            title: "Freenove Basic Starter Kit for ESP8266", url: `${URL_PREFIX}fnk0075${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0076": { 
            title: "Freenove ESP8266 Board", url: `${URL_PREFIX}fnk0076${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0079": { 
            title: "Freenove Breakout Board for Arduino Nano Micro Raspberry Pi Pico 1 2 W ESP32 ESP8266", url: `${URL_PREFIX}fnk0079${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0082": { 
            title: "Freenove Ultimate Starter Kit for ESP32-S3-WROOM CAM", url: `${URL_PREFIX}fnk0082${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0083": { 
            title: "Freenove Super Starter Kit for ESP32-S3-WROOM CAM", url: `${URL_PREFIX}fnk0083${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0084": { 
            title: "Freenove Basic Starter Kit for ESP32-S3-WROOM CAM", url: `${URL_PREFIX}fnk0084${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0085": { 
            title: "Freenove ESP32-S3-WROOM CAM Board", url: `${URL_PREFIX}fnk0085${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0086": { 
            title: "Freenove Development Kit for ESP32-S3-WROOM CAM", url: `${URL_PREFIX}fnk0086${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0090": { 
            title: "Freenove ESP32-WROOM Board", url: `${URL_PREFIX}fnk0090${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0091": { 
            title: "Freenove Breakout Board for ESP32 / ESP32-S3", url: `${URL_PREFIX}fnk0091${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0092": { 
            title: "Freenove Complete Starter Kit with Board V5 WiFi Mini(Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0092${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0093": { 
            title: "Freenove Ultimate Starter Kit with Board V5 WiFi Mini(Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0093${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0094": { 
            title: "Freenove Super Starter Kit with Board V5 WiFi Mini(Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0094${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0095": { 
            title: "Freenove Basic Starter Kit with Board V5 WiFi Mini(Compatible with Arduino IDE)", url: `${URL_PREFIX}fnk0095${URL_SUFFIX}`, category: "Starter"
        },
        "fnk0096": { 
            title: "Freenove Control Board V5 Compatible with Arduino UNO R4 WiFi Mini", url: `${URL_PREFIX}fnk0096${URL_SUFFIX}`, category: "Starter"
        },
    };
    addFontAwesome();   // Load icon fonts
    const widgetContainer = document.createElement('div');
    widgetContainer.id = 'fnk-quick-jump';
    widgetContainer.classList.add('minimized');

    // HTML implementation
    widgetContainer.innerHTML = `
        <div class="minimized-icon"><i class="fas fa-search"></i></div>
        
        <div class="fnk-widget">
            <div class="fnk-header">
                <img src="https://cdn.jsdelivr.net/gh/Freenove/freenove-docs/docs/source/_static/images/freenove_logo_tag_icon.png" class="fnk-logo">
                <div class="fnk-title">Document Quick Navigation</div>
            </div>
            
            <p class="fnk-description">Enter FNK number to quickly jump to the specified document page</p>
            
            <div class="fnk-input-group">
                <input type="text" class="fnk-input" id="fnkInput" placeholder="Enter FNK number (e.g. fnk0019)">
                <button class="fnk-button" id="fnkButton">Jump</button>
            </div>
            
            <div class="fnk-suggestions" id="fnkSuggestions"></div>
            
            <div class="fnk-error-message" id="fnkErrorMessage"></div>
            
            <div class="fnk-recent-section">
                <div class="fnk-section-title">
                    <span><i class="fas fa-history"></i> Recent Visits</span>
                    <span class="fnk-clear-recent" title="Clear History"><i class="fas fa-trash-alt"></i></span>
                </div>
                <div class="fnk-recent-list" id="fnkRecentList"></div>
            </div>
            
            <div class="fnk-key-hint">
                <p>Tip: Press <kbd>Alt</kbd> + <kbd>K</kbd> to quick-open search.</p>
            </div>
        </div>
    `;
    
    // Append widget container to the document body
    document.body.appendChild(widgetContainer);

    // Get DOM references to all interactive elements
    const fnkInput = document.getElementById('fnkInput');
    const fnkButton = document.getElementById('fnkButton');
    const suggestionsContainer = document.getElementById('fnkSuggestions');
    const errorMessage = document.getElementById('fnkErrorMessage');
    const recentList = document.getElementById('fnkRecentList');
    const minimizedIcon = widgetContainer.querySelector('.minimized-icon');
    const clearRecentBtn = widgetContainer.querySelector('.fnk-clear-recent');

    // Initialize recent items from localStorage or empty array
    const recentItems = JSON.parse(localStorage.getItem('fnkRecentItems')) || [];
    renderRecentItems();

    // Widget state variables
    let isMinimized = true;         // Tracks minimized/expanded state
    let interactionTimeout;         // Timeout reference for user interactions

    // Drag-related state variables
    let isDragging = false;         // Flag indicating active drag operation
    let isMouseDownOnIcon = false;  // Tracks if mouse down started on the icon
    let dragStartX, dragStartY;     // Initial mouse coordinates when drag started
    let initialX, initialY;         // Initial widget position when drag started
    const dragThreshold = 5;        // Minimum pixel movement to initiate drag

    // Default minimized position (bottom-right corner)
    let lastMinimizedEffectivePosition = { 
        top: 'auto', bottom: '25px', 
        left: 'auto', right: '25px',
        transform: 'none' // Added transform for consistent state management
    };

    // Load saved position from localStorage if available
    const storedPosition = localStorage.getItem('fnkMinimizedEffectivePosition');
    if (storedPosition) {
        lastMinimizedEffectivePosition = JSON.parse(storedPosition);
    } 

    // Apply the saved/initial position to the actual DOM
    applyMinimizedPositionToDOM();

    /**
     * Applies the stored minimized position to the widget container
     * Clears any conflicting styles before applying the stored position
     */
    function applyMinimizedPositionToDOM() {
        // Clear conflicting styles before applying the stored ones
        widgetContainer.style.top = lastMinimizedEffectivePosition.top;
        widgetContainer.style.bottom = lastMinimizedEffectivePosition.bottom;
        widgetContainer.style.left = lastMinimizedEffectivePosition.left;
        widgetContainer.style.right = lastMinimizedEffectivePosition.right;
        widgetContainer.style.transform = lastMinimizedEffectivePosition.transform;
    }

    /**
     * Calculates the expanded widget height by creating a temporary clone
     * @returns {number} The calculated height of the expanded widget in pixels
     */
    function getExpandedWidgetHeight() {
        // Create a temporary clone to measure height without affecting the live DOM
        const tempWidget = widgetContainer.cloneNode(true);
        tempWidget.id = 'fnk-quick-jump-temp'; // Change ID to avoid collision
        tempWidget.classList.remove('minimized');
        tempWidget.classList.remove('expanded');
        
        // Position off-screen for accurate measurement
        tempWidget.style.cssText = `
            position: fixed; 
            top: 0; 
            left: -9999px;
            width: auto; 
            height: auto; 
            visibility: hidden; 
            opacity: 0;
            pointer-events: none;
        `;
        
        document.body.appendChild(tempWidget);
        // Use offsetHeight for full element height including padding/border
        const height = tempWidget.querySelector('.fnk-widget').offsetHeight;
        document.body.removeChild(tempWidget);
        return height;
    }

    // Cache the expanded height to avoid repeated calculations
    const cachedExpandedWidgetHeight = getExpandedWidgetHeight();

    /**
     * Expands the widget from minimized state and positions it appropriately
     * Handles viewport edge cases and centers the widget vertically
     */
    function expandWidget() {
        widgetContainer.classList.remove('minimized'); 
        isMinimized = false;

        const viewportHeight = window.innerHeight;
        const widgetActualHeight = cachedExpandedWidgetHeight; 
        
        // Variables for final positioning
        let targetTop; 
        let targetBottom;
        let targetTransform; 

        // Calculate ideal centered position
        let calculatedAbsTop = (viewportHeight / 2) - (widgetActualHeight / 2);
        
        // Handle top edge case (widget would go above viewport)
        if (calculatedAbsTop < 25) {
            targetTop = '25px';
            targetTransform = 'none'; 
            targetBottom = 'auto';
        } 
        // Handle bottom edge case (widget would go below viewport)
        else if ((calculatedAbsTop + widgetActualHeight) > (viewportHeight - 25)) {
            targetTop = 'auto'; 
            targetBottom = '25px'; 
            targetTransform = 'none'; 
        } 
        // else {
        //     targetTop = '50%';
        //     targetBottom = 'auto';
        //     targetTransform = 'translateY(-50%)';
        // }
        
        // Apply calculated positioning
        widgetContainer.style.top = targetTop;
        widgetContainer.style.bottom = targetBottom;
        widgetContainer.style.left = 'auto';
        widgetContainer.style.right = '20px';
        widgetContainer.style.transform = targetTransform;
        
        widgetContainer.classList.add('expanded');
        
        // Focus input after small delay to allow transition
        setTimeout(() => {
            fnkInput.focus();
        }, 100);
        resetAutoMinimizeTimer();
    }

    /**
     * Minimizes the widget and resets its state
     * Applies the stored minimized position and hides UI elements
     */
    function minimizeWidget() {
        widgetContainer.classList.remove('expanded');
        isMinimized = true;

        // Restore minimized position
        applyMinimizedPositionToDOM(); 
        widgetContainer.classList.add('minimized');

        // Clean up UI state
        suggestionsContainer.style.display = 'none';
        errorMessage.style.display = 'none';
        fnkInput.value = '';
        resetAutoMinimizeTimer();
    }

    /**
     * Toggles between expanded and minimized states
     */
    function toggleWidget() {
        if (isMinimized) {
            expandWidget();
        } else {
            minimizeWidget();
        }
    }

    function resetAutoMinimizeTimer() {
        // clearTimeout(interactionTimeout);
        // interactionTimeout = setTimeout(() => {
        //     if (!isMinimized) {
        //         minimizeWidget();
        //     }
        // }, 10000); 
    }

    /**
     * Handles the FNK document jump functionality
     * Validates input, finds matching document, and redirects
     * Shows error if no match found
     */
    function jumpToFNK() {
        // Normalize input (trim whitespace and lowercase)
        const fnk = fnkInput.value.trim().toLowerCase();
        errorMessage.style.display = 'none'; // Reset error display
        
        // Validate empty input
        if (!fnk) {
            showError("Please enter the FNK number");
            return;
        }
        
        // Exact match case
        if (fnkMap[fnk]) {
            saveToRecent(fnk);
            window.location.href = fnkMap[fnk].url;
        } 
        // Fuzzy match case
        else {
            const match = findClosestMatch(fnk);
            if (match) {
                // Auto-correct input to matched value
                fnkInput.value = match;
                saveToRecent(match);
                window.location.href = fnkMap[match].url;
            } else {
                showError(`No matching documents found: ${fnk}`);
            }
        }
        
        // Reset auto-minimize timer on interaction
        resetAutoMinimizeTimer();
    }

    /**
     * Finds the closest matching FNK document using a ranking system
     * @param {string} searchTerm - The search query to match against
     * @returns {string|null} The best matching FNK code or null if no match
     */
    function findClosestMatch(searchTerm) {
        // Normalize search term
        searchTerm = searchTerm.trim().toLowerCase();
        if (!searchTerm) return null;

        let bestMatchCode = null;
        let highestRank = -1; // Ranking threshold

        // Iterate through all FNK documents
        for (const code in fnkMap) {
            if (!fnkMap.hasOwnProperty(code)) continue;

            const doc = fnkMap[code];
            const codeLower = code.toLowerCase();
            const titleLower = doc.title.toLowerCase();

            let currentRank = -1; // Default no-match rank

            /* 
            Match ranking system (highest to lowest priority):
            7 - Exact code match
            6 - Code starts with search term
            5 - Exact title match
            4 - Title starts with search term
            3 - Code contains search term
            2 - Title contains search term
            1 - Partial number match (with/without 'fnk' prefix)
            */
            
            // 7: Exact code match
            if (codeLower === searchTerm) {
                currentRank = 7;
            } 
            // 6: Code prefix match
            else if (codeLower.startsWith(searchTerm)) {
                currentRank = 6;
            }
            // 5: Exact title match
            else if (titleLower === searchTerm) {
                currentRank = 5;
            }
            // 4: Title prefix match
            else if (titleLower.startsWith(searchTerm)) {
                currentRank = 4;
            }
            // 3: Code contains term
            else if (codeLower.includes(searchTerm)) {
                currentRank = 3;
            }
            // 2: Title contains term
            else if (titleLower.includes(searchTerm)) {
                currentRank = 2;
            }
            // 1: Partial number match cases
            else if (searchTerm.startsWith('fnk')) { 
                const searchNum = searchTerm.replace('fnk', '');
                const codeNum = codeLower.replace('fnk', '');
                if (searchNum && codeNum.startsWith(searchNum)) {
                    currentRank = 1;
                }
            } else if (searchTerm.match(/^\d+$/)) {
                const codeNum = codeLower.replace('fnk', '');
                if (codeNum.startsWith(searchTerm)) {
                    currentRank = 1;
                }
            }
            
            // Update best match if current rank is higher
            if (currentRank > highestRank) {
                highestRank = currentRank;
                bestMatchCode = code;
            }
        }
        return bestMatchCode; 
    }

    /**
     * Displays an error/success message with appropriate styling
     * @param {string} message - The message to display
     * @param {string} [type='error'] - Message type ('error' or other for success)
     */
    function showError(message, type = 'error') {
        // Set message content and make visible
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Apply color scheme based on message type
        errorMessage.style.background = type === 'error' 
            ? 'rgba(231, 76, 60, 0.12)'  // Light red background for errors
            : 'rgba(46, 204, 113, 0.12)'; // Light green background for success
        errorMessage.style.color = type === 'error' 
            ? '#e74c3c'  // Red text for errors
            : '#27ae60';  // Green text for success
        
        // Auto-hide non-error messages after 3 seconds
        if (type !== 'error') {
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }
    }

    /**
     * Displays autocomplete suggestions based on input value
     * Sorts results by match relevance and renders suggestion items
     */
    function showSuggestions() {
        // Normalize input value
        const value = fnkInput.value.trim().toLowerCase();
        suggestionsContainer.innerHTML = ''; // Clear previous suggestions
        
        // Hide suggestions if empty input
        if (!value) {
            suggestionsContainer.style.display = 'none';
            return;
        }
        
        // Filter codes that match input in either code or title
        let matchedCodes = Object.keys(fnkMap).filter(key => {
            const doc = fnkMap[key];
            return key.toLowerCase().includes(value) || 
                doc.title.toLowerCase().includes(value);
        });

        // Sort matches by relevance
        matchedCodes.sort((a, b) => {
            const aDoc = fnkMap[a];
            const bDoc = fnkMap[b];
            const aLower = a.toLowerCase();
            const bLower = b.toLowerCase();
            const aTitleLower = aDoc.title.toLowerCase();
            const bTitleLower = bDoc.title.toLowerCase();

            /**
             * Calculates match ranking score (7 = highest, 0 = no match)
             * @param {string} code - FNK code
             * @param {string} title - Document title
             * @param {string} searchValue - Normalized search term
             * @returns {number} Match ranking score
             */
            const getRank = (code, title, searchValue) => {
                const codeLower = code.toLowerCase();
                const titleLower = title.toLowerCase();

                // Ranking criteria (ordered by priority)
                if (codeLower === searchValue) return 7;       // Exact code match
                if (codeLower.startsWith(searchValue)) return 6; // Code prefix match
                if (titleLower === searchValue) return 5;     // Exact title match
                if (titleLower.startsWith(searchValue)) return 4; // Title prefix match
                if (codeLower.includes(searchValue)) return 3; // Code contains term
                if (titleLower.includes(searchValue)) return 2; // Title contains term
                
                // Special handling for numeric/FNK code patterns
                if (searchValue.startsWith('fnk') && codeLower.startsWith('fnk')) {
                    const searchNum = searchValue.replace('fnk', '');
                    const codeNum = codeLower.replace('fnk', '');
                    if (searchNum && codeNum.startsWith(searchNum)) return 1;
                } else if (searchValue.match(/^\d+$/)) {
                    const codeNum = codeLower.replace('fnk', '');
                    if (codeNum.startsWith(searchValue)) return 1;
                }
                return 0; // No strong match
            };

            // Compare match ranks
            const rankA = getRank(a, aDoc.title, value);
            const rankB = getRank(b, bDoc.title, value);

            // Sort primarily by match rank (highest first)
            if (rankA !== rankB) {
                return rankB - rankA;
            }

            // Secondary sort: alphabetical if ranks are equal
            return a.localeCompare(b);
        });
        
        // Display suggestions if matches found
        if (matchedCodes.length > 0) {
            matchedCodes.forEach(key => {
                const doc = fnkMap[key];
                const div = document.createElement('div');
                div.className = 'fnk-suggestion-item';
                
                // Create suggestion item HTML
                div.innerHTML = `
                    <div class="fnk-suggestion-code">${key}</div>
                    <div class="fnk-suggestion-title">${doc.title}</div>
                `;
                
                // Handle click on suggestion
                div.onclick = (e) => { 
                    e.stopPropagation(); // Prevent event bubbling
                    fnkInput.value = key; // Autofill input
                    jumpToFNK(); // Trigger jump
                };
                
                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
        
        // Reset auto-minimize timer on interaction
        resetAutoMinimizeTimer();
    }
    
    /**
     * Saves a visited FNK document to recent items list
     * Maintains a maximum of 5 items in localStorage
     * @param {string} fnkCode - The FNK document code to save
     */
    function saveToRecent(fnkCode) {
        const doc = fnkMap[fnkCode];
        // Create new recent item with timestamp
        const newItem = {
            code: fnkCode,
            title: doc.title,
            timestamp: new Date().getTime()
        };
        
        // Remove existing entry if present (to avoid duplicates)
        const filtered = recentItems.filter(item => item.code !== fnkCode);
        // Add new item to beginning of array (most recent first)
        filtered.unshift(newItem);
        
        // Maintain only 5 most recent items
        if (filtered.length > 5) {
            filtered.pop();
        }
        
        // Persist to localStorage
        localStorage.setItem('fnkRecentItems', JSON.stringify(filtered));
        
        // Update in-memory array
        recentItems.length = 0; // Clear and refill
        recentItems.push(...filtered);
        renderRecentItems();
    }

    /**
     * Renders the list of recently visited FNK documents
     * Shows empty state if no recent items exist
     */
    function renderRecentItems() {
        recentList.innerHTML = ''; // Clear existing items
        
        // Handle empty state
        if (recentItems.length === 0) {
            const emptyItem = document.createElement('div');
            emptyItem.className = 'fnk-recent-item';
            emptyItem.textContent = 'No recent visit records';
            recentList.appendChild(emptyItem);
            return;
        }
        
        // Sort by timestamp (newest first)
        const sortedItems = [...recentItems].sort((a, b) => b.timestamp - a.timestamp);
        
        // Create DOM elements for each recent item
        sortedItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'fnk-recent-item';
            div.innerHTML = `
                <div class="fnk-recent-code">${item.code}</div>
                <div class="fnk-recent-name">${item.title}</div>
            `;
            // Handle click on recent item
            div.onclick = (e) => { 
                e.stopPropagation();
                fnkInput.value = item.code; // Autofill input
                jumpToFNK(); // Navigate to document
            };
            recentList.appendChild(div);
        });
    }

    /**
     * Initiates drag operation for the widget
     * @param {Event} e - Mouse/Touch start event
     */
    function startDrag(e) {
        if (!isMinimized) return; // Only allow dragging when minimized
        e.preventDefault(); // Prevent text selection during drag
        
        // Initialize drag state
        isDragging = false;         
        isMouseDownOnIcon = true;   
        
        // Store initial pointer position
        dragStartX = e.clientX || e.touches[0].clientX;
        dragStartY = e.clientY || e.touches[0].clientY;
        
        // Get initial widget position
        const rect = widgetContainer.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        
        // Update cursor and disable transitions during drag
        widgetContainer.style.cursor = 'grabbing';
        widgetContainer.style.transition = 'none';
        widgetContainer.style.willChange = 'top, left, right, bottom';

        // Add event listeners for drag movement and end
        document.addEventListener('mousemove', doDrag);
        document.addEventListener('mouseup', stopDrag);
        document.addEventListener('touchmove', doDrag, { passive: false }); 
        document.addEventListener('touchend', stopDrag);
    }

    /**
     * Handles widget movement during drag operation
     * @param {Event} e - Mouse/Touch move event
     */
    function doDrag(e) {
        if (!isMouseDownOnIcon || !isMinimized) return; 

        // Get current pointer position (supporting both mouse and touch)
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        
        if (clientX === undefined || clientY === undefined) return; 

        // Calculate movement delta
        const deltaX = clientX - dragStartX;
        const deltaY = clientY - dragStartY;
        
        // Check if movement exceeds threshold to initiate drag
        if (!isDragging && (Math.abs(deltaX) > dragThreshold || Math.abs(deltaY) > dragThreshold)) {
            isDragging = true;
            document.body.classList.add('no-selection'); // Disable text selection during drag
        }
        
        // Update widget position if dragging
        if (isDragging) { 
            e.preventDefault(); // Prevent scrolling on touch devices
            
            // Calculate new position
            const newX = initialX + deltaX;
            const newY = initialY + deltaY;
            
            // Apply new position
            widgetContainer.style.left = `${newX}px`;
            widgetContainer.style.top = `${newY}px`;
            widgetContainer.style.right = 'auto'; // Clear opposite positioning
            widgetContainer.style.bottom = 'auto'; 
            widgetContainer.style.transform = 'none'; 
        }
    }

    /**
     * Cleans up after drag operation and handles final positioning
     */
    function stopDrag() {
        if (!isMouseDownOnIcon) return; 

        // Restore UI state
        document.body.classList.remove('no-selection'); 
        widgetContainer.style.willChange = 'auto'; 

        // Re-enable transitions
        widgetContainer.style.transition = ''; 

        if (!isDragging) {
            // Handle click (without drag movement)
            toggleWidget(); 
        } else {
            // Handle drag completion - get final position
            const rect = widgetContainer.getBoundingClientRect();
            saveMinimizedPositionAndSnap(rect.top); 
        }
        
        // Reset drag state
        isDragging = false;
        isMouseDownOnIcon = false;
        widgetContainer.style.cursor = 'grab'; 
        
        // Clean up event listeners
        document.removeEventListener('mousemove', doDrag);
        document.removeEventListener('mouseup', stopDrag);
        document.removeEventListener('touchmove', doDrag);
        document.removeEventListener('touchend', stopDrag);
    }
    /**
     * Saves the minimized widget position and handles viewport snapping
     * @param {number} finalTop - The top position after dragging
     */
    function saveMinimizedPositionAndSnap(finalTop) {
        const rect = widgetContainer.getBoundingClientRect(); 
        const viewportHeight = window.innerHeight;
        
        // Initialize positioning variables
        let targetTop = 'auto';
        let targetBottom = 'auto';

        // Calculate widget's vertical center point
        const currentCenterY = finalTop + rect.height / 2;
        
        // Snap to top half if widget center is above viewport midpoint
        if (currentCenterY < viewportHeight / 2) {
            targetTop = `${Math.max(25, finalTop)}px`;
            targetBottom = 'auto';
        } 
        // Snap to bottom half otherwise
        else {
            let calculatedBottom = viewportHeight - (finalTop + rect.height);
            targetBottom = `${Math.max(25, calculatedBottom)}px`;
            targetTop = 'auto';
        }
        // Store final position with right-aligned default
        lastMinimizedEffectivePosition = {
            top: targetTop,
            bottom: targetBottom,
            left: 'auto', // Always clear left as we stick to right
            right: '25px', // Always stick to right 25px
            transform: 'none' // Clear any translate for minimized state
        };

        // Persist position to localStorage
        localStorage.setItem('fnkMinimizedEffectivePosition', JSON.stringify(lastMinimizedEffectivePosition));

        // Apply the new position to DOM
        applyMinimizedPositionToDOM(); 
    }

    // Set up drag handlers for minimized icon
    minimizedIcon.addEventListener('mousedown', startDrag);
    minimizedIcon.addEventListener('touchstart', startDrag, { passive: false });
    
    // Clear recent items handler
    clearRecentBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        localStorage.removeItem('fnkRecentItems');
        recentItems.length = 0;
        renderRecentItems();
        showError("Recent visit records have been cleared", "success");
        resetAutoMinimizeTimer();
    });
    
    // Minimize widget when clicking outside
    document.addEventListener('click', (e) => {
        if (!widgetContainer.contains(e.target) && !isMinimized) {
            minimizeWidget();
        }
    });

    // Widget container click handler (prevents propagation for non-interactive areas)
    widgetContainer.addEventListener('click', (e) => {
        // Only stop propagation if it's not on interactive elements inside the widget
        if (e.target.id === 'fnkInput' || e.target.id === 'fnkButton' || 
            e.target.closest('.fnk-suggestion-item') || e.target.closest('.fnk-recent-item') ||
            e.target.closest('.fnk-clear-recent') || e.target === minimizedIcon) {
            // These elements should allow their own clicks
        } else {
            e.stopPropagation();
        }
    });

    // Global keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Alt+K toggles widget visibility
        if (e.altKey && e.key === 'k') {
            e.preventDefault();
            toggleWidget();
        }
        // Escape minimizes if expanded
        if (e.key === 'Escape' && !isMinimized) {
            minimizeWidget();
        }
    });
    
    // Set up core interaction handlers
    fnkButton.addEventListener('click', jumpToFNK);
    fnkInput.addEventListener('input', showSuggestions);
    fnkInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); 
            jumpToFNK();
        }
    });
    
    // Initialize auto-minimize timer
    resetAutoMinimizeTimer();
});

// Create and append style element for drag operations
const style = document.createElement('style');
style.textContent = `
    /* Disable text selection during drag */
    body.no-selection {
        user-select: none !important;
        -webkit-user-select: none !important;
        cursor: grabbing !important; 
    }
    /* Disable all pointer events during drag */
    body.no-selection * {
        -webkit-user-drag: none !important;
        user-drag: none !important;
        pointer-events: none !important; 
    }
    /* Exception for the dragged icon itself */
    body.no-selection #fnk-quick-jump.minimized .minimized-icon {
        pointer-events: auto !important; 
        cursor: grabbing !important;
    }
`;
document.head.appendChild(style);
/* ---------------------------------------------------------------------------------------------- */


/* ---------------------------------------------------------------------------------------------- */
/* description: About the four circular controls

 * author: vegetable-syc

 * date: 2025/06/06
 */

/**
 * Adds Font Awesome CSS library to the document head
 * Uses CDN for fast loading
 */
function addFontAwesome() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
}

/**
 * @fileoverview This script creates a set of floating control buttons (e.g., GitHub, Download)
 * on a documentation page. It is intelligently designed to work across two different types
 * of Read the Docs hosting environments:
 *
 *  1. Subdomain-based: e.g., https://my-project.readthedocs.io/en/latest/
 *  2. Path-based with Custom Domain: e.g., https://docs.my-site.com/projects/my-project/en/latest/
 *
 * It correctly determines the environment from the URL and generates the appropriate
 * download link for each case.
 */

/**
 * Intelligently parses the page's URL to determine the project's configuration.
 * It identifies the hosting environment and generates the correct download URL format.
 *
 * @returns {{project: string, language: string, version: string, htmlDownloadUrl: string}}
 *          An object containing the parsed configuration and the environment-specific download URL.
 */
function getProjectConfigFromUrl() {
    const hostname = window.location.hostname;
    const pathParts = window.location.pathname.split('/').filter(part => part !== '');

    // --- Initialize with safe default values ---
    // These will be used if the URL structure cannot be recognized.
    let project = 'unknown-project';
    let language = 'en';
    let version = 'latest';
    let htmlDownloadUrl = '#'; // A safe, non-functional link as a fallback.

    console.log("Analyzing URL:", window.location.href);

    /*
     * --- Core Logic: Differentiate between hosting environments ---
     * This is the brain of the script. It checks for URL patterns to decide
     * how to extract data and, critically, how to format the download URL.
     */

    // Case 1: Check for a "Path-based" structure on a custom domain.
    // e.g., https://docs.freenove.com/projects/fnk0019/en/latest/
    if (pathParts.length >= 3 && pathParts[0] === 'projects') {
        console.log("Detected: 'Path-based' structure (e.g., docs.freenove.com).");
        
        project = pathParts[1];
        language = pathParts[2];
        version = pathParts[3] || 'latest'; // Fallback if version is missing.
        
        // CRITICAL: In this environment, the download URL MUST include the project name.
        htmlDownloadUrl = `/_/downloads/${project}/${language}/${version}/htmlzip/`;

    }
    // Case 2: Check for a "Subdomain-based" structure, typical of readthedocs.io.
    // e.g., https://freenove-sphinx-rst.readthedocs.io/en/latest/
    else if (hostname.includes('.readthedocs.io')) {
        console.log("Detected: 'Subdomain-based' structure (e.g., project.readthedocs.io).");
        
        project = hostname.split('.')[0];
        language = pathParts[0] || 'en';
        version = pathParts[1] || 'latest';
        
        // CRITICAL: In this environment, the download URL MUST NOT include the project name.
        htmlDownloadUrl = `/_/downloads/${language}/${version}/htmlzip/`;
        
    }
    // Case 3: Fallback if the URL structure is unrecognized.
    else {
        console.warn("Could not recognize URL structure. The download link might be incorrect.");
        // We will stick with the safe '#' link, or you could construct a best-guess URL.
    }
    
    // Package and return the final, calculated configuration.
    const config = { project, language, version, htmlDownloadUrl };
    console.log("Final Parsed Config:", config);
    return config;
}

/**
 * Creates the control buttons and appends them to the document body.
 * It uses the configuration object provided by getProjectConfigFromUrl().
 */
function createPageContent() {
    console.log("createPageContent: Function execution started.");

    // --- 1. Get Smart Configuration ---
    // This single call provides all the environment-specific data needed.
    const config = getProjectConfigFromUrl();
    const { project, version, htmlDownloadUrl } = config;

    console.log(`Using data: project='${project}', version='${version}'`);
    console.log(`Using final download URL: ${htmlDownloadUrl}`);

    // --- 2. Create and Configure DOM Elements ---

    // Guard clause: Prevent creating duplicate controls if the script is run more than once.
    if (document.querySelector('.rtd-controls')) {
        console.warn("Controls container already exists. Halting to prevent duplicates.");
        return;
    }

    const body = document.body;
    const rtdControls = document.createElement('div');
    rtdControls.className = 'rtd-controls';

    // A data-driven approach to defining the buttons.
    // This makes it easy to add, remove, or modify buttons in the future.
    const controlsData = [
        { href: "https://github.com/Freenove", target: "_blank", className: "github-btn", icon: "fab fa-github", tooltip: "GitHub" },
        { href: "https://freenove.com/", target: "_blank", className: "website-btn", tooltip: "Freenove Official Website" },
        { href: "https://www.youtube.com/@Freenove", target: "_blank", className: "youtube", icon: "fab fa-youtube", tooltip: "YouTube" },
        {
            href: htmlDownloadUrl, // Use the intelligently generated download URL.
            className: "download-btn",
            icon: "fas fa-download",
            tooltip: "Download HTML Docs",
            download: `${project}-${version}.zip` // The 'download' attribute suggests a filename to the browser.
        }
    ];

    // Loop through the configuration data to build each button element.
    controlsData.forEach(data => {
        const link = document.createElement('a');
        link.href = data.href;
        
        // Set optional attributes only if they exist in the data.
        if (data.target) link.target = data.target;
        if (data.download) link.setAttribute('download', data.download);
        
        link.className = `control-btn ${data.className}`;

        // If an icon class is provided, create the <i> element for it.
        if (data.icon) {
            const icon = document.createElement('i');
            icon.className = data.icon;
            link.appendChild(icon);
        }

        // Every button gets a tooltip for a better user experience.
        const tooltip = document.createElement('span');
        tooltip.className = 'tooltip';
        tooltip.textContent = data.tooltip;
        link.appendChild(tooltip);

        // Add the finished button to the main controls container.
        rtdControls.appendChild(link);
    });

    // Finally, attach the container with all its buttons to the document body.
    body.appendChild(rtdControls);
    
    console.log("Controls were successfully created and added to the page.");
}


/* --- SCRIPT EXECUTION ENTRY POINT --- */

// We wrap the entire process in a 'DOMContentLoaded' event listener.
// This ensures the script doesn't run until the basic HTML document is parsed and ready,
// which prevents errors from trying to access elements that don't exist yet (like `document.body`).
document.addEventListener('DOMContentLoaded', () => {
    // A try...catch block is a safety net that catches any unexpected, fatal errors
    // during the script's execution, preventing them from crashing other JavaScript on the page.
    try {
        createPageContent();
    } catch (error) {
        console.error("A critical error occurred while executing createPageContent:", error);
    }
});
/* ---------------------------------------------------------------------------------------------- */