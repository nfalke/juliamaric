var juliamaric=juliamaric||{};juliamaric.init=function(){juliamaric.contact.init(),juliamaric.accordion.init()};var juliamaric=juliamaric||{};juliamaric.accordion={settings:{event:"click",toggler:".js-accordionToggler",panel:".js-accordionPanel",activeClass:"is-expanded"},init:function(){var t=this;t.bindEvents(t)},bindEvents:function(t){var i,n=document.querySelectorAll(t.settings.toggler);for(i=0;i<n.length;i+=1)n[i].addEventListener(t.settings.event,function(i){i.preventDefault(),t.toggle(t,n,this)})},toggle:function(t,i,n){var e,a=n.parentNode.nextElementSibling;for(e=0;e<i.length;e+=1)i[e]!==n&&(i[e].parentNode.classList.remove(t.settings.activeClass),i[e].parentNode.nextElementSibling.style.maxHeight=null);n.parentNode.classList.toggle(t.settings.activeClass),a.style.maxHeight?a.style.maxHeight=null:a.style.maxHeight=a.scrollHeight+"px"}};var juliamaric=juliamaric||{};juliamaric.contact={init:function(){this.bindEvents()},bindEvents:function(){$(".js-contactForm").on("submit",function(t){var i=$(this);t.preventDefault(),i.attr("disabled",!0),i.find("textarea").val().length>0&&$.ajax({url:i.attr("action"),data:i.serialize()}).done(function(t){i.html($(t).find(".js-contactForm").html())}).fail(function(t){alert("Någonting gick fel och meddelandet kunde tyvärr inte skickas. Vänligen försök igen."),i.attr("disabled",!1)})})}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJhY2NvcmRpb24uanMiLCJjb250YWN0LmpzIl0sIm5hbWVzIjpbImp1bGlhbWFyaWMiLCJpbml0IiwiY29udGFjdCIsImFjY29yZGlvbiIsInNldHRpbmdzIiwiZXZlbnQiLCJ0b2dnbGVyIiwicGFuZWwiLCJhY3RpdmVDbGFzcyIsIm1vZHVsZSIsInRoaXMiLCJiaW5kRXZlbnRzIiwiaSIsInRvZ2dsZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwidG9nZ2xlIiwicGFyZW50Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsImNsYXNzTGlzdCIsInJlbW92ZSIsInN0eWxlIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiJCIsIm9uIiwidGhpc0VsZW1lbnQiLCJhdHRyIiwiZmluZCIsInZhbCIsImFqYXgiLCJ1cmwiLCJkYXRhIiwic2VyaWFsaXplIiwiZG9uZSIsInJlc3BvbnNlIiwiaHRtbCIsImZhaWwiLCJhbGVydCJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBQUEsWUFBQUEsY0FFQUEsWUFBQUMsS0FBQSxXQUNBRCxXQUFBRSxRQUFBRCxPQUNBRCxXQUFBRyxVQUFBRixPQ0pBLElBQUFELFlBQUFBLGNBRUFBLFlBQUFHLFdBQ0FDLFVBQ0FDLE1BQUEsUUFDQUMsUUFBQSx1QkFDQUMsTUFBQSxxQkFDQUMsWUFBQSxlQUdBUCxLQUFBLFdBQ0EsR0FBQVEsR0FBQUMsSUFFQUQsR0FBQUUsV0FBQUYsSUFHQUUsV0FBQSxTQUFBRixHQUNBLEdBQ0FHLEdBREFDLEVBQUFDLFNBQUFDLGlCQUFBTixFQUFBTCxTQUFBRSxRQUdBLEtBQUFNLEVBQUEsRUFBQUEsRUFBQUMsRUFBQUcsT0FBQUosR0FBQSxFQUNBQyxFQUFBRCxHQUFBSyxpQkFBQVIsRUFBQUwsU0FBQUMsTUFBQSxTQUFBQSxHQUNBQSxFQUFBYSxpQkFFQVQsRUFBQVUsT0FBQVYsRUFBQUksRUFBQUgsU0FLQVMsT0FBQSxTQUFBVixFQUFBSSxFQUFBUCxHQUNBLEdBQ0FNLEdBREFMLEVBQUFELEVBQUFjLFdBQUFDLGtCQUlBLEtBQUFULEVBQUEsRUFBQUEsRUFBQUMsRUFBQUcsT0FBQUosR0FBQSxFQUNBQyxFQUFBRCxLQUFBTixJQUNBTyxFQUFBRCxHQUFBUSxXQUFBRSxVQUFBQyxPQUFBZCxFQUFBTCxTQUFBSSxhQUNBSyxFQUFBRCxHQUFBUSxXQUFBQyxtQkFBQUcsTUFBQUMsVUFBQSxLQUtBbkIsR0FBQWMsV0FBQUUsVUFBQUgsT0FBQVYsRUFBQUwsU0FBQUksYUFHQUQsRUFBQWlCLE1BQUFDLFVBQ0FsQixFQUFBaUIsTUFBQUMsVUFBQSxLQUVBbEIsRUFBQWlCLE1BQUFDLFVBQUFsQixFQUFBbUIsYUFBQSxNQ2hEQSxJQUFBMUIsWUFBQUEsY0FFQUEsWUFBQUUsU0FDQUQsS0FBQSxXQUNBUyxLQUFBQyxjQUdBQSxXQUFBLFdBQ0FnQixFQUFBLG1CQUFBQyxHQUFBLFNBQUEsU0FBQXZCLEdBQ0EsR0FBQXdCLEdBQUFGLEVBQUFqQixLQUVBTCxHQUFBYSxpQkFFQVcsRUFBQUMsS0FBQSxZQUFBLEdBRUFELEVBQUFFLEtBQUEsWUFBQUMsTUFBQWhCLE9BQUEsR0FDQVcsRUFBQU0sTUFDQUMsSUFBQUwsRUFBQUMsS0FBQSxVQUNBSyxLQUFBTixFQUFBTyxjQUNBQyxLQUFBLFNBQUFDLEdBQ0FULEVBQUFVLEtBQUFaLEVBQUFXLEdBQUFQLEtBQUEsbUJBQUFRLFVBQ0FDLEtBQUEsU0FBQUYsR0FDQUcsTUFBQSx1RkFDQVosRUFBQUMsS0FBQSxZQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBqdWxpYW1hcmljID0ganVsaWFtYXJpYyB8fCB7fTtcblxuanVsaWFtYXJpYy5pbml0ID0gZnVuY3Rpb24gKCkge1xuXHRqdWxpYW1hcmljLmNvbnRhY3QuaW5pdCgpO1xuXHRqdWxpYW1hcmljLmFjY29yZGlvbi5pbml0KCk7XG59OyIsInZhciBqdWxpYW1hcmljID0ganVsaWFtYXJpYyB8fCB7fTtcblxuanVsaWFtYXJpYy5hY2NvcmRpb24gPSB7XG5cdHNldHRpbmdzOiB7XG5cdFx0ZXZlbnQ6ICdjbGljaycsXG5cdFx0dG9nZ2xlcjogJy5qcy1hY2NvcmRpb25Ub2dnbGVyJyxcblx0XHRwYW5lbDogJy5qcy1hY2NvcmRpb25QYW5lbCcsXG5cdFx0YWN0aXZlQ2xhc3M6ICdpcy1leHBhbmRlZCdcblx0fSxcblxuXHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIG1vZHVsZSA9IHRoaXM7XG5cblx0XHRtb2R1bGUuYmluZEV2ZW50cyhtb2R1bGUpO1xuXHR9LFxuXG5cdGJpbmRFdmVudHM6IGZ1bmN0aW9uIChtb2R1bGUpIHtcblx0XHR2YXIgdG9nZ2xlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKG1vZHVsZS5zZXR0aW5ncy50b2dnbGVyKSxcblx0XHRcdGk7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9nZ2xlcnMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdHRvZ2dsZXJzW2ldLmFkZEV2ZW50TGlzdGVuZXIobW9kdWxlLnNldHRpbmdzLmV2ZW50LCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XG5cdFx0XHRcdG1vZHVsZS50b2dnbGUobW9kdWxlLCB0b2dnbGVycywgdGhpcyk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0dG9nZ2xlOiBmdW5jdGlvbiAobW9kdWxlLCB0b2dnbGVycywgdG9nZ2xlcikge1xuXHRcdHZhciBwYW5lbCA9IHRvZ2dsZXIucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcsXG5cdFx0XHRpO1xuXG5cdFx0Ly8gQ2xvc2Ugb3RoZXJzXG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvZ2dsZXJzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRpZiAodG9nZ2xlcnNbaV0gIT09IHRvZ2dsZXIpIHtcblx0XHRcdFx0dG9nZ2xlcnNbaV0ucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKG1vZHVsZS5zZXR0aW5ncy5hY3RpdmVDbGFzcyk7XG5cdFx0XHRcdHRvZ2dsZXJzW2ldLnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLm1heEhlaWdodCA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IGFjdGl2ZSBjbGFzcyB0byBjaGFuZ2UgaWNvbiAoKy8tKVxuXHRcdHRvZ2dsZXIucGFyZW50Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKG1vZHVsZS5zZXR0aW5ncy5hY3RpdmVDbGFzcyk7XG5cblx0XHQvLyBTZXQgbWF4IGhlaWdodCB0byBwYW5lbC4gVGhpcyBtYWtlcyB0aGUgcGFubmVsIHRvZ2dsZS5cblx0XHRpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG5cdFx0ICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0ICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuXHRcdH1cblx0fVxufSIsInZhciBqdWxpYW1hcmljID0ganVsaWFtYXJpYyB8fCB7fTtcblxuanVsaWFtYXJpYy5jb250YWN0ID0ge1xuXHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5iaW5kRXZlbnRzKCk7XG5cdH0sXG5cblx0YmluZEV2ZW50czogZnVuY3Rpb24gKCkge1xuXHRcdCQoJy5qcy1jb250YWN0Rm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRcdHZhciB0aGlzRWxlbWVudCA9ICQodGhpcyk7XG5cblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdHRoaXNFbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cblx0XHRcdGlmICh0aGlzRWxlbWVudC5maW5kKCd0ZXh0YXJlYScpLnZhbCgpLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRcdCQuYWpheCh7XG5cdFx0XHRcdFx0dXJsOiB0aGlzRWxlbWVudC5hdHRyKCdhY3Rpb24nKSxcblx0XHRcdFx0XHRkYXRhOiB0aGlzRWxlbWVudC5zZXJpYWxpemUoKVxuXHRcdFx0XHR9KS5kb25lKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdHRoaXNFbGVtZW50Lmh0bWwoJChyZXNwb25zZSkuZmluZCgnLmpzLWNvbnRhY3RGb3JtJykuaHRtbCgpKTtcblx0XHRcdFx0fSkuZmFpbChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0XHRhbGVydCgnTsOlZ29udGluZyBnaWNrIGZlbCBvY2ggbWVkZGVsYW5kZXQga3VuZGUgdHl2w6RyciBpbnRlIHNraWNrYXMuIFbDpG5saWdlbiBmw7Zyc8O2ayBpZ2VuLicpO1xuXHRcdFx0XHRcdHRoaXNFbGVtZW50LmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSJdfQ==
