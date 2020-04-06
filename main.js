// ==UserScript==
// @name         OkWuHanPneumonia
// @namespace    https://www.kevinweng.tk/
// @version      0.0
// @description  「好的！武漢肺炎」厭倦舔共媒體與共匪同路人堅持使用新冠肺炎嗎？？不要再吵惹，直接一鍵全部變回武漢肺炎！！
// @author       nevikw39
// @match        *://*/*
// ==/UserScript==
(function () {
    'use strict';
    setInterval(function () {
        let walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: function (n) {
                if (n.nodeValue.trim() && !n.wuhan)
                    return NodeFilter.FILTER_ACCEPT;
                return NodeFilter.FILTER_SKIP;
            }
        }, false);
        let node = null;
        while (node = walker.nextNode()) {
            node.wuhan = true;
            node.nodeValue = node.nodeValue.replace(/新冠/, "武漢");
        }
    }, 817);
})();