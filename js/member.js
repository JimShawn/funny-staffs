
function getUrlParam(name) { //取地址带的参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
function fix(num, length) {
    return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}
var totalNum = 0;
var pageType = getUrlParam('type');
var member_Item=[];
switch (pageType * 1) {
    case 1://fz1
        totalNum = 180;
        for(var i=0;i<totalNum;i++){
            if (i<120) {
                member_Item.push('一楼-'+fix(i+1,3)+'桌');
            } else if(i<150) {
                member_Item.push('二楼-'+fix(i+1-120,3)+'桌');
            }else{
                member_Item.push('三楼-'+fix(i+1-150,3)+'桌');
            }
        }
        break;
    case 3://xm
        totalNum = 75;
        for (let i = 0; i < totalNum; i++) {
            member_Item.push(fix(i+1,3)+'桌');
        }
        break;
    case 4://sz
        totalNum = 71;
        for (let i = 0; i < totalNum; i++) {
            member_Item.push(fix(i+1,3)+'桌');
        }
        break;
    default:
        break;
}



console.log(member_Item);
