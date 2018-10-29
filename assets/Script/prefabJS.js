// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
function gmlDefine(){
    alert("cccc");
}
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        StarPreFab:{
            default:null,
            type:cc.Prefab
        }
    },
    /*创建星星*/
    makeStar:function(){
        var newStar = cc.instantiate(this.StarPreFab);
        newStar.setScale(0.5,0.5);
        this.node.addChild(newStar);
        newStar.setPosition(0,0);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function() {
        this.makeStar();
    },
    onStart:function(){
        alert("bbb");
    },

    start () {
        gmlDefine();
    },

    // update (dt) {},
});
