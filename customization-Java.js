function openPopup(room) {
    const popupWindow = document.getElementById("popupWindow");
    const popupContent = document.getElementById("popupContent");
    const popupImage = document.getElementById("popupImage");
    const previewElement = document.getElementById("preview");

    // 清空彈跳視窗中的內容
    popupContent.innerHTML = "";



    // 設置相應的圖片
    switch (room) {
        case 'room01':
            popupImage.src = document.getElementById('kitchen-img').src;
            break;
        case 'room02':
            popupImage.src = document.getElementById('bedroom-img').src;
            break;
        case 'room03':
            popupImage.src = document.getElementById('livingroom-img').src;
            break;
        case 'room04':
            popupImage.src = document.getElementById('garden-img').src;
            break;
        default:
            popupImage.src = '';
    }

    // 顯示彈跳視窗
    popupWindow.style.display = "block";
}


function closePopup() {
    document.getElementById("popupWindow").style.display = "none";
}

window.onload = function() {
    const room01 = document.getElementById("room01");
    const room02 = document.getElementById("room02");
    const room03 = document.getElementById("room03");
    const room04 = document.getElementById("room04");
    const closeButton = document.getElementById("closeButton");

    // 確保按鈕存在時再綁定事件
    if (room01) room01.onclick = function() { openPopup('room01'); };
    if (room02) room02.onclick = function() { openPopup('room02'); };
    if (room03) room03.onclick = function() { openPopup('room03'); };
    if (room04) room04.onclick = function() { openPopup('room04'); };
    if (closeButton) closeButton.onclick = closePopup;
}







function toggleSection(sectionId) {
console.log('Button clicked:', sectionId);

//hide the dtail at first
const sections = document.querySelectorAll('.detail-section');
sections.forEach(section => {
section.style.display = 'none';
console.log('Hiding section:', section.id);
});

// Show the right section
const targetSection = document.getElementById(sectionId);
if (targetSection) {
console.log('Target section found:', sectionId);
targetSection.style.display = 'block';
} else {
console.error('Target section not found:', sectionId);
}
}

function toggleCustomization(customizationPanelId) {
console.log('Subcategory clicked:', customizationPanelId);

//Hide customization-panel
const panels = document.querySelectorAll('.customization-panel');
panels.forEach(panel => {
panel.style.display = 'none';
});

// Show the selected customization panel
const targetPanel = document.getElementById(customizationPanelId);
if (targetPanel) {
console.log('Customization panel found:', targetPanel);
targetPanel.style.display = 'block'; // 顯示點擊對應的面板
console.log('Panel now displayed:', customizationPanelId);
} else {
console.error('Customization panel not found:', customizationPanelId);
}
}

function changeColor(svgId, color) {
console.log('Changing color to:', color); 

// Choose the right component (body-path or blush-path)
const elementId = (svgId === 'body') ? 'body-path' : 'blush-path';

// blush-group
if (svgId === 'blush') {
        
const paths = document.querySelectorAll(`#${elementId} path`);
paths.forEach(path => {
path.style.fill = color; 
        });
    } else {
const pathElement = document.getElementById(elementId); 
if (pathElement) {
pathElement.style.fill = color; 
console.log('Color changed on path:', pathElement);
        } else {
console.error('SVG path not found!');
        }
    }
}

//HAIRRRRR
function toggleLayer(layerId) {
console.log('Layer clicked:', layerId);

// 隱藏所有 hair layers
const layers = document.querySelectorAll('.hair-container svg');
layers.forEach(layer => {
layer.style.display = 'none';
});

// 顯示被點擊的 layer
const targetLayer = document.getElementById(layerId);
if (targetLayer) {
targetLayer.style.display = 'block';
console.log('Layer now displayed:', layerId);
} else {
console.error('Layer not found:', layerId);
}
}

document.addEventListener("DOMContentLoaded", function() {
// 隱藏所有的 hair layers 當頁面載入時
const layers = document.querySelectorAll('.hair-container svg');
layers.forEach(layer => {
layer.style.display = 'none';
});

console.log('All layers are hidden by default.');
});

// 點擊顯示特定 layer
function toggleLayer(layerId) {
console.log('Layer clicked:', layerId);

// 隱藏所有 layer
const layers = document.querySelectorAll('.hair-container svg');
layers.forEach(layer => {
layer.style.display = 'none';
});

// 顯示被點擊的 layer
const targetLayer = document.getElementById(layerId);
if (targetLayer) {
targetLayer.style.display = 'block';
console.log('Layer now displayed:', layerId);
} else {
console.error('Layer not found:', layerId);
}
}

//change the color of hair
function changeLayerColor(layerId, color) {
console.log('Changing color of:', layerId, 'to:', color);

const targetLayer = document.getElementById(layerId);
if (targetLayer) {
targetLayer.querySelector('path').style.fill = color;
console.log('Color changed successfully.');
} else {
console.error('Layer not found:', layerId);
}
}

let currentLayerId = null;

function toggleLayer(layerId) {
console.log('Layer selected:', layerId);
// 更新當前選擇的 layer
currentLayerId = layerId;

// 顯示所選的 layer
const layers = document.querySelectorAll('.hair-container svg');
layers.forEach(layer => {
if (layer.id === layerId) {
layer.style.display = 'block';
} else {
layer.style.display = 'none';
}
});
}

function changeLayerColor(color) {
if (currentLayerId) {
console.log('Changing color of:', currentLayerId, 'to:', color);
const targetLayer = document.getElementById(currentLayerId);
if (targetLayer) {
targetLayer.querySelector('path').style.fill = color; // 修改當前 layer 的顏色
console.log('Color changed successfully.');
} else {
console.error('Layer not found:', currentLayerId);
}
} else {
console.error('No layer selected to change color.');
}
}

//TOPPPPPPP
let currentTopId = null;

function toggleTop(topId) {
console.log('Top selected:', topId);

// 如果再次點擊已選擇的 top，則取消選擇
if (currentTopId === topId) {
const targetTop = document.getElementById(topId);
if (targetTop) {
targetTop.style.display = 'none';
currentTopId = null;
console.log('Top deselected:', topId);
}
return;
}

// 隱藏所有 top 圖層
const tops = document.querySelectorAll('.top-layer');
tops.forEach(top => {
top.style.display = 'none';
});

// 更新當前選中的 top ID
currentTopId = topId;

// 顯示被選中的 top 圖層
const targetTop = document.getElementById(topId);
if (targetTop) {
targetTop.style.display = 'block';
console.log('Top now displayed:', topId);
} else {
console.error('Top not found:', topId);
}
}



// 移除所有按鈕的選中樣式
const buttons = document.querySelectorAll('.svg-button');
buttons.forEach(button => {
button.classList.remove('selected');
});

// 為當前選中的按鈕添加選中樣式
const selectedButton = document.querySelector(`[onclick="toggleTop('${topId}')"]`);
if (selectedButton) {
selectedButton.classList.add('selected');
}

function changeTOPColor(color, className) {
if (currentTopId) {
console.log('Changing color of:', currentTopId, 'to:', color);
const targetTop = document.getElementById(currentTopId);
if (targetTop) {
// 修改所有屬於指定類別的元素的顏色
const elements = targetTop.querySelectorAll(`.${className}`);
elements.forEach(element => {
    element.style.fill = color; // 更新指定類別的顏色
});
console.log(`Color for ${className} changed successfully.`);
} else {
console.error('No top layer found with id:', currentTopId);
}
} else {
console.error('No top selected to change color.');
}
}

// 當頁面載入時隱藏所有的 top
document.addEventListener("DOMContentLoaded", function () {
const tops = document.querySelectorAll('.top-container svg');
tops.forEach(top => {
top.style.display = 'none';
});
console.log('All tops are hidden by default.');
});



// Bottom

function toggleBottom(id) {
  console.log("Bottom ID:", id);
  let element = document.getElementById(id);
  if (element) {
      element.style.display = (element.style.display === 'none') ? 'block' : 'none';
      console.log("Element found and toggled.");
  } else {
      console.error("Element not found:", id);
  }
}

function toggleBottom(id) {
  // 隱藏所有的底部樣式元素
  const bottomStyles = document.querySelectorAll('.bottom-btn .svg-button');
  bottomStyles.forEach(style => {
      style.classList.remove('active');
  });
  
  // 顯示選中的樣式
  const selectedBottom = document.getElementById(id);
  if (selectedBottom) {
      selectedBottom.classList.add('active');
  }
}


// 確保 DOM 完全加載後執行代碼
document.addEventListener("DOMContentLoaded", function () {
  let currentBottomId = null;

  // 定義 toggleBottom 函數
  window.toggleBottom = function (bottomId) {
      console.log('Bottom selected:', bottomId);

      // 如果再次點擊已選擇的 bottom，則取消選擇
      if (currentBottomId === bottomId) {
          const targetBottom = document.getElementById(bottomId);
          if (targetBottom) {
              targetBottom.style.display = 'none';
              currentBottomId = null;
              console.log('Bottom deselected:', bottomId);
          }
          return;
      }

      // 隱藏所有 bottom 圖層
      const bottoms = document.querySelectorAll('.bottom-container svg');
      bottoms.forEach(bottom => {
          bottom.style.display = 'none';
      });

      // 更新當前選中的 bottom ID
      currentBottomId = bottomId;

      // 顯示被選中的 bottom 圖層
      const targetBottom = document.getElementById(bottomId);
      if (targetBottom) {
          targetBottom.style.display = 'block';
          console.log('Bottom now displayed:', bottomId);
      } else {
          console.error('Bottom not found:', bottomId);
      }

      // 移除所有按鈕的選中樣式
      const buttons = document.querySelectorAll('.svg-button');
      buttons.forEach(button => {
          button.classList.remove('selected');
      });

      // 為當前選中的按鈕添加選中樣式
      const selectedButton = document.querySelector(`[data-bottom-id="${bottomId}"]`);
      if (selectedButton) {
          selectedButton.classList.add('selected');
      }
  };
  document.addEventListener("DOMContentLoaded", function () {
    let currentBottomId = null;

    // 定義 toggleBottom 函數
    window.toggleBottom = function(bottomId) {
        // 你的 `toggleBottom` 函數代碼
    };

    // 將 changeBottomColor 函數定義在全局作用域
    window.changeBottomColor = function(color) {
        if (currentBottomId) {
            console.log('Changing color of:', currentBottomId, 'to:', color);
            const targetBottom = document.getElementById(currentBottomId);
            if (targetBottom) {
                // 假設填充部分為所有的 <path> 元素
                const elements = targetBottom.querySelectorAll('path, rect, circle, polygon');
                elements.forEach(element => {
                    element.style.fill = color; // 更新顏色
                });
                console.log('Color changed successfully.');
            } else {
                console.error('No bottom layer found with id:', currentBottomId);
            }
        } else {
            console.error('No bottom selected to change color.');
        }
    };

    // 其他初始化代碼
});


  // 當頁面載入時隱藏所有的 bottom
  const bottoms = document.querySelectorAll('.bottom-container svg');
  bottoms.forEach(bottom => {
      bottom.style.display = 'none';
  });
  console.log('All bottoms are hidden by default.');

  // 選擇所有 svg-button 並添加 click 事件
  const buttons = document.querySelectorAll('.svg-button');
  buttons.forEach(button => {
      button.addEventListener('click', function () {
          const bottomId = button.getAttribute('data-bottom-id');
          toggleBottom(bottomId); // 呼叫 toggleBottom 函數
      });
  });

  // 綁定顏色更改按鈕事件
  const colorButtons = document.querySelectorAll('#bottom-color-panel button');
  colorButtons.forEach(button => {
      button.addEventListener('click', function () {
          const color = this.style.backgroundColor;
          changeBottomColor(color); // 呼叫 changeBottomColor 函數
      });
  });

  // 預設隱藏所有 bottom 樣式元素
  document.querySelectorAll('.bottom-btn .svg-button').forEach(button => {
      button.addEventListener('click', function () {
          toggleBottom(this.id);
      });
  });

  console.log('JavaScript initialized successfully.');
});


function toggleBottom(id) {
  console.log('toggleBottom called with id:', id);
  // 隱藏所有的底部樣式元素
  const bottomStyles = document.querySelectorAll('.bottom-btn .svg-button');
  bottomStyles.forEach(style => {
      style.classList.remove('active');
  });
  
  // 顯示選中的樣式
  const selectedBottom = document.getElementById(id);
  if (selectedBottom) {
      selectedBottom.classList.add('active');
  } else {
      console.error('Element not found with id:', id);
  }
}
function toggleBottom(id) {
  console.log("toggleBottom called with id:", id);
  
  // 獲取 bottom-container 元素
  const bottomContainer = document.getElementById('bottom-container');
  if (!bottomContainer) {
      console.error('Bottom container not found: bottom-container');
      return;
  }

  // 清除當前的 bottom 圖片（如果有的話）
  bottomContainer.innerHTML = '';

  // 構造要插入的 SVG 的 ID
  const svgId = `${id}`;
  const svgElement = document.getElementById(svgId);

  if (svgElement) {
      // copy SVG 元素，並插入到 bottom-container 中
      const clonedSvg = svgElement.cloneNode(true);
      clonedSvg.style.display = 'block';  // 確保顯示克隆的 SVG
      bottomContainer.appendChild(clonedSvg);
      console.log('SVG element added to bottom-container:', clonedSvg);
  } else {
      console.error('SVG element not found for id:', svgId);
  }
}


// 在按鈕上綁定點擊事件
const bottomButtons = document.querySelectorAll('.bottom-button');

bottomButtons.forEach(button => {
  button.addEventListener('click', function() {
      const id = this.getAttribute('data-id');
      toggleBottom(id);
  });
});


//SHOESSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
function toggleSection(sectionId) {
  // Hide all detail sections
  const detailSections = document.querySelectorAll('.detail-section');
  detailSections.forEach(section => {
      section.style.display = 'none';
  });

  // Show the selected detail section
  const section = document.getElementById(sectionId);
  if (section) {
      section.style.display = 'block';
  }
}

function toggleCustomization(panelId) {
  // Hide all customization panels
  const panels = document.querySelectorAll('.customization-panel');
  panels.forEach(panel => {
      panel.style.display = 'none';
  });

  // Show the selected customization panel
  const panel = document.getElementById(panelId);
  if (panel) {
      panel.style.display = 'block';
  }
}

function changeShoesColor(color) {
  const shoesSvg = document.getElementById('shoes');
  if (shoesSvg) {
      const rects = shoesSvg.querySelectorAll('rect');
      rects.forEach(rect => {
          rect.style.fill = color;
      });
  } else {
      console.error('Shoes SVG not found');
  }
}


//ACCCCCCCCCCCCCCCCCCCCCCCCCCCCC

// 切換顯示樣式或顏色選擇面板
// 切換顯示樣式或顏色選擇面板
function toggleCustomization(panelId) {
    // 隱藏所有面板
    const panels = document.querySelectorAll('.customization-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // 顯示被點擊的面板
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.style.display = 'block';
    } else {
        console.error('Panel not found:', panelId);
    }
}

// 切換 acc SVG 的顯示
function toggleAcc(accId) {
    // 隱藏所有面板，確保切換 acc 後也會隱藏其他面板
    const panels = document.querySelectorAll('.customization-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });

    // 顯示 acc-container
    const container = document.getElementById('acc-container');
    if (container) {
        container.style.display = 'block';
    } else {
        console.error('Acc container not found');
        return;
    }

    // 隱藏所有 acc 的 SVG
    const svgs = container.querySelectorAll('svg');
    svgs.forEach(svg => {
        svg.style.display = 'none';
    });

    // 顯示選中的 SVG
    const selectedSvg = document.getElementById(accId);
    if (selectedSvg) {
        selectedSvg.style.display = 'block';
    } else {
        console.error('SVG not found:', accId);
    }
}

// 改變 frame 顏色
function changeFrameColor(color, elementClass) {
    const elements = document.querySelectorAll(`.${elementClass}`);
    elements.forEach(element => {
        element.style.fill = color;
    });
}

// 改變 lens 顏色
function changeLensColor(color, lensClass) {
    const lenses = document.querySelectorAll(`.${lensClass}`);
    lenses.forEach(lens => {
        lens.style.fill = color;
    });
}

// 當頁面加載時，隱藏所有面板
document.addEventListener("DOMContentLoaded", function () {
    const panels = document.querySelectorAll('.customization-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
    });
});

// 通用的切換顯示樣式函數（包含隱藏其他面板的邏輯）
function toggleSection(sectionId) {
    // 隱藏所有 detail sections
    const detailSections = document.querySelectorAll('.detail-section');
    detailSections.forEach(section => {
        section.style.display = 'none';
    });

    // 隱藏所有 customization panels 確保沒有重疊
    const customizationPanels = document.querySelectorAll('.customization-panel');
    customizationPanels.forEach(panel => {
        panel.style.display = 'none';
    });

    // 顯示被點擊的 section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    } else {
        console.error('Section not found:', sectionId);
    }
}
