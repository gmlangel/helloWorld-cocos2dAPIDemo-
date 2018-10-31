cc.Class({
    extends: cc.Component,

    properties: {
        gmllabel: {
            default: null,
            type: cc.Label
        },
        /**
        defaults, set visually when attaching this script to the Canvas
        @param 这是测试
        */ 
        text: '这里填内容'
    },

    // use this for initialization
    onLoad: function () {
        this.gmllabel.string = this.text;
        // console.log("isNumber,isString=======>");
        // this.func1();
        // console.log("addon=======>差异复制")
        // this.func2();
        // console.log("mixin=======>完全复制")
        // this.func3();
        // console.log("extend=======>继承")
        // this.func4();

        // console.log("getSuper=======>获取类型的父类类型")
        // this.func5();
        // console.log("isChildClassOf=======>获取当前类型是否是与某个类型相同或者继承与某个类型")
        // this.func6();

        // console.log("clear=======>清除Object对象的所有属性")
        // this.func7();
         console.log("getPropertyDescriptor=======>清除Object对象的所有属性");
         this.func8();
    },
    func8:function(){
        let obb = {"a":14,"b":15,"c":function(){alert(3)}};
        let des = cc.js.getPropertyDescriptor(obb,"a");
        console.log(des);
    },
    func7:function(){
        let obb = {"a":14,"b":15,"c":function(){alert(3)}};
        console.log(obb)
        cc.js.clear(obb);
        console.log(obb)
    },
    func6:function(){
        let testC = function(){};//testC类型是 Function类型的实例，所以可以用instanceof比较
        cc.js.extend(testC,cc.Component);
        console.log(cc.js.isChildClassOf(testC,Object))//testC类继承自Object类型
        console.log(cc.js.isChildClassOf(testC,cc.Component));//testC类继承自cc.Component类型
    },
    func5:function(){
        let testC = function(){};
        console.log(testC instanceof Function);
        console.log(cc.js.getSuper(testC) == Function);
        console.log(cc.js.getSuper(testC) == Object);

        cc.js.extend(testC,cc.Component);
        let testCObj = new testC();
        console.log(cc.js.getSuper(testC) == cc.Component);
        console.log(cc.js.getSuper(testCObj) == cc.Component);
        console.log(cc.js.getSuper(testCObj) == Function);        
    },
    func4:function(){
        let af = function(){};
        let aobj = new af();
        console.log(aobj.constructor === af);//实例与类（直接类）比较
        console.log(aobj.constructor === cc.Component);//实例与类（无关类）比较
        console.log(af instanceof cc.Component);//类型与类（无关类）比较
        console.log(aobj instanceof cc.Component);//实例与类（间接或直接类）比较

        cc.js.extend(af,cc.Component);//动态继承
        let aobj2 = new af();
        console.log(aobj2.constructor === af);//实例与类（直接类）比较
        console.log(aobj2.constructor === cc.Component);//实例与类（无关类）比较
        console.log(af instanceof cc.Component);//类型与类（无关类）比较
        console.log(aobj2 instanceof cc.Component);//实例与类（间接类）比较
    },
    func3:function(){
        let obj1 = {"a":13,"b":14,"d":15};
        let obj2 = {"a":14,"b":15};
        let obj3 = {};
        cc.js.mixin(obj2,obj1);
        cc.js.mixin(obj3,obj1);
        console.log("obj2=" + obj2);//输出{"a":14,"b":15},"d":15;
        console.log("obj3=" + obj3);//输出{"a":13,"b":14,"d":15};
    },
    func1:function(){
        let a = "13";
        let b = 14;
        let c = new Number(15);
        
        console.log("a是不是整形"+cc.js.isNumber(a));
        console.log("b是不是整形"+cc.js.isNumber(b));
        console.log("c是不是整形"+cc.js.isNumber(c));
        console.log("a是不是字符串"+cc.js.isString(a));
        console.log("b是不是字符串"+cc.js.isString(b));
        console.log("c是不是字符串"+cc.js.isString(c));
    },
    func2:function(){
        let obj1 = {"a":13,"b":14,"d":15};
        let obj2 = {"a":14,"b":15};
        let obj3 = {};
        cc.js.addon(obj2,obj1);
        cc.js.addon(obj3,obj1);
        console.log("obj2=" + obj2);//输出{"a":14,"b":15},"d":15;
        console.log("obj3=" + obj3);//输出{"a":13,"b":14,"d":15};
    },


    // called every frame
    update: function (dt) {

    },
});
