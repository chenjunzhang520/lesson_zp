/** 
* @func EditInPlace 就地编辑
* @param {string} value 值
* @param {HTMLElement} ParentElement 挂载点
* @param {string} id 自身ID
*/
function EditInPlace(id, value, ParentElement) { 
    // {} 空对象 this指向它
    this.id = id;
    this.value = value || '这个家伙很懒,什么都没有留下';
    this.ParentElement = ParentElement;
    this.containerElement = null; // 空对象 typeof null === 'object'
    this.saveButton = null; // 保存
    this.cancelButton = null; // 取消
    this.staticElement = null; // input 文本框
    this.filedElement = null; // span 文本

    // 代码比较多， 按功能分模块 拆函数
    this.createElement(); // 创建DOM 对象
    this.attachEvent(); // 事件添加
}
EditInPlace.prototype = {
    // 封装了DOM操作
    createElement: function () {  
        // DOM 内存
        this.containerElement = document.createElement('div'); // containerElement 类型是 HTMLDivElement
        console.log(this.containerElement,'/////',
         // this 绑定
         Object.prototype.toString.apply(this.containerElement) // 精准定位原生类型
         // typeof 无法区分是普通对象、数组还是 DOM 元素
        );
        this.containerElement.id = this.id;

        // 值
        this.staticElement = document.createElement('span');
        this.staticElement.innerHTML = this.value;
        this.containerElement.appendChild(this.staticElement);

        // 输入框
        this.filedElement = document.createElement('input');
        this.filedElement.type = 'text';
        this.filedElement.value = this.value;
        this.containerElement.appendChild(this.filedElement);
        
        this.ParentElement.appendChild(this.containerElement);

        this.saveButton = document.createElement('input');
        this.saveButton.type = 'button';
        this.saveButton.value = '保存';
        this.containerElement.appendChild(this.saveButton);

        this.cancelButton = document.createElement('input');
        this.cancelButton.type = 'button';
        this.cancelButton.value = '取消';
        this.containerElement.appendChild(this.cancelButton);

         this.convertToText(); // 切换到文本显示状态
        // this.convertToField(); // 切换到编辑状态
    },
    convertToText: function () { 
        this.filedElement.style.display = 'none'; // 不可见隐藏
        this.saveButton.style.display = 'none'; // 不可见隐藏
        this.cancelButton.style.display = 'none'; // 不可见隐藏
        this.staticElement.style.display = 'inline'; // 可见显示
    },
    convertToField: function () { 
        this.filedElement.style.display = 'inline'; // 可见显示
        this.filedElement.value = this.value; // 保留输入框的值
        this.saveButton.style.display = 'inline';   // 可见显示
        this.cancelButton.style.display = 'inline'; // 可见显示
        this.staticElement.style.display = 'none'; // 不可见隐藏
    },
    attachEvent: function() {
        this.staticElement.addEventListener('click', () => { 
            this.convertToField(); // 切换到输入框显示状态
        }
    );
    this.saveButton.addEventListener('click', () => { 
        this.save();
    });
    this.cancelButton.addEventListener('click', () => { 
        this.cancel();
    });
    },
    save: function () { 
        var value = this.filedElement.value;
        // fetch 后端存储
        this.staticElement.innerHTML = value;
        this.convertToText();
    },
    cancel: function () { 
        this.convertToText();
    }

}