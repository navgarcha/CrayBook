"use strict";
var ShitCray;
var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
ShitCray = (function() {
  function ShitCray(crayDelay) {
    if (crayDelay == null) {
      crayDelay = 500;
    }
    this.shitCray = __bind(this.shitCray, this);
    this.shitCray();
    setInterval(this.shitCray, crayDelay);
  }
  ShitCray.prototype.LIKE_REPLACE = "Dat Shit Cray";
  ShitCray.prototype.UNLIKE_REPLACE = "Not So Cray";
  ShitCray.prototype.LIKE_THIS_REPLACE = "think this shit is cray";
  ShitCray.prototype.LIKES_THIS_REPLACE = "thinks this shit is cray";
  ShitCray.prototype.LIKE_TEXT_SELECTOR = [".uiUfiLike .UIImageBlock_Content"];
  ShitCray.prototype.LIKE_BUTTON_SELECTOR = ["button.like_link .default_message", "button.cmnt_like_link .default_message", "a.likeButton .uiButtonText", "a.buttonLink .like"];
  ShitCray.prototype.SAVING_SELECTOR = ["button.like_link .saving_message", "button.cmnt_like_link .saving_message", "a.buttonLink .unlike"];
  ShitCray.prototype.replaceLike = function(elm, type) {
    return elm.textContent = type === "like" ? this.LIKE_REPLACE : this.UNLIKE_REPLACE;
  };
  ShitCray.prototype.replaceLikeThis = function(elm) {
    elm.textContent = elm.textContent.replace("like this", this.LIKE_THIS_REPLACE);
    return elm.textContent = elm.textContent.replace("likes this", this.LIKES_THIS_REPLACE);
  };
  ShitCray.prototype.shitCray = function() {
    var elm, likeElms, likeThisElms, type, _i, _j, _len, _len2, _ref;
    likeElms = $(this.LIKE_BUTTON_SELECTOR + this.SAVING_SELECTOR);
    likeThisElms = $(this.LIKE_TEXT_SELECTOR.join());
    for (_i = 0, _len = likeElms.length; _i < _len; _i++) {
      elm = likeElms[_i];
      if (/like/i.test(type = elm.textContent.toLowerCase())) {
        this.replaceLike(elm, type);
      }
    }
    _ref = likeThisElms.contents();
    for (_j = 0, _len2 = _ref.length; _j < _len2; _j++) {
      elm = _ref[_j];
      if (elm.nodeType === 3) {
        this.replaceLikeThis(elm);
      }
    }
  };
  return ShitCray;
})();
$(function() {
  return new ShitCray(200);
});