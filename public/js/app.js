var juliamaric=juliamaric||{};juliamaric.init=function(){juliamaric.contact.init(),juliamaric.toggleFooter.init()};var juliamaric=juliamaric||{};juliamaric.contact={init:function(){this.bindEvents()},bindEvents:function(){$(".js-contactForm").on("submit",function(t){var i=$(this);t.preventDefault(),i.attr("disabled",!0),i.find("textarea").val().length>0&&$.ajax({url:i.attr("action"),data:i.serialize()}).done(function(t){i.html($(t).find(".js-contactForm").html())}).fail(function(t){alert("Någonting gick fel och meddelandet kunde tyvärr inte skickas. Vänligen försök igen."),i.attr("disabled",!1)})})}};var juliamaric=juliamaric||{};juliamaric.toggleFooter={defaults:{footer:$(".footer"),footerOffset:$(".footer").offset()},init:function(){var t=this;t.bindEvents(t)},bindEvents:function(t){window.addEventListener("scroll",function(){t.toggler(t)})},toggler:function(t){document.body.scrollTop+window.innerHeight>=t.defaults.footerOffset.top?(console.log("show"),t.defaults.footer.find(".footer-content").show()):(console.log("hide"),t.defaults.footer.find(".footer-content").hide())}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb250YWN0LmpzIiwidG9nZ2xlLWZvb3Rlci5qcyJdLCJuYW1lcyI6WyJqdWxpYW1hcmljIiwiaW5pdCIsImNvbnRhY3QiLCJ0b2dnbGVGb290ZXIiLCJ0aGlzIiwiYmluZEV2ZW50cyIsIiQiLCJvbiIsImV2ZW50IiwidGhpc0VsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImF0dHIiLCJmaW5kIiwidmFsIiwibGVuZ3RoIiwiYWpheCIsInVybCIsImRhdGEiLCJzZXJpYWxpemUiLCJkb25lIiwicmVzcG9uc2UiLCJodG1sIiwiZmFpbCIsImFsZXJ0IiwiZGVmYXVsdHMiLCJmb290ZXIiLCJmb290ZXJPZmZzZXQiLCJvZmZzZXQiLCJzZWxmIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZXIiLCJkb2N1bWVudCIsImJvZHkiLCJzY3JvbGxUb3AiLCJpbm5lckhlaWdodCIsInRvcCIsImNvbnNvbGUiLCJsb2ciLCJzaG93IiwiaGlkZSJdLCJtYXBwaW5ncyI6IkFBQUEsR0FBQUEsWUFBQUEsY0FFQUEsWUFBQUMsS0FBQSxXQUNBRCxXQUFBRSxRQUFBRCxPQUNBRCxXQUFBRyxhQUFBRixPQ0pBLElBQUFELFlBQUFBLGNBRUFBLFlBQUFFLFNBQ0FELEtBQUEsV0FDQUcsS0FBQUMsY0FHQUEsV0FBQSxXQUNBQyxFQUFBLG1CQUFBQyxHQUFBLFNBQUEsU0FBQUMsR0FDQSxHQUFBQyxHQUFBSCxFQUFBRixLQUVBSSxHQUFBRSxpQkFFQUQsRUFBQUUsS0FBQSxZQUFBLEdBRUFGLEVBQUFHLEtBQUEsWUFBQUMsTUFBQUMsT0FBQSxHQUNBUixFQUFBUyxNQUNBQyxJQUFBUCxFQUFBRSxLQUFBLFVBQ0FNLEtBQUFSLEVBQUFTLGNBQ0FDLEtBQUEsU0FBQUMsR0FDQVgsRUFBQVksS0FBQWYsRUFBQWMsR0FBQVIsS0FBQSxtQkFBQVMsVUFDQUMsS0FBQSxTQUFBRixHQUNBRyxNQUFBLHVGQUNBZCxFQUFBRSxLQUFBLFlBQUEsUUN2QkEsSUFBQVgsWUFBQUEsY0FFQUEsWUFBQUcsY0FDQXFCLFVBQ0FDLE9BQUFuQixFQUFBLFdBQ0FvQixhQUFBcEIsRUFBQSxXQUFBcUIsVUFHQTFCLEtBQUEsV0FDQSxHQUFBMkIsR0FBQXhCLElBRUF3QixHQUFBdkIsV0FBQXVCLElBR0F2QixXQUFBLFNBQUF1QixHQUNBQyxPQUFBQyxpQkFBQSxTQUFBLFdBQ0FGLEVBQUFHLFFBQUFILE1BSUFHLFFBQUEsU0FBQUgsR0FFQUksU0FBQUMsS0FBQUMsVUFBQUwsT0FBQU0sYUFBQVAsRUFBQUosU0FBQUUsYUFBQVUsS0FDQUMsUUFBQUMsSUFBQSxRQUNBVixFQUFBSixTQUFBQyxPQUFBYixLQUFBLG1CQUFBMkIsU0FFQUYsUUFBQUMsSUFBQSxRQUNBVixFQUFBSixTQUFBQyxPQUFBYixLQUFBLG1CQUFBNEIiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGp1bGlhbWFyaWMgPSBqdWxpYW1hcmljIHx8IHt9O1xuXG5qdWxpYW1hcmljLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cdGp1bGlhbWFyaWMuY29udGFjdC5pbml0KCk7XG5cdGp1bGlhbWFyaWMudG9nZ2xlRm9vdGVyLmluaXQoKTtcbn07IiwidmFyIGp1bGlhbWFyaWMgPSBqdWxpYW1hcmljIHx8IHt9O1xuXG5qdWxpYW1hcmljLmNvbnRhY3QgPSB7XG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcblx0fSxcblxuXHRiaW5kRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG5cdFx0JCgnLmpzLWNvbnRhY3RGb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0dmFyIHRoaXNFbGVtZW50ID0gJCh0aGlzKTtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dGhpc0VsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcblxuXHRcdFx0aWYgKHRoaXNFbGVtZW50LmZpbmQoJ3RleHRhcmVhJykudmFsKCkubGVuZ3RoID4gMCApIHtcblx0XHRcdFx0JC5hamF4KHtcblx0XHRcdFx0XHR1cmw6IHRoaXNFbGVtZW50LmF0dHIoJ2FjdGlvbicpLFxuXHRcdFx0XHRcdGRhdGE6IHRoaXNFbGVtZW50LnNlcmlhbGl6ZSgpXG5cdFx0XHRcdH0pLmRvbmUoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0dGhpc0VsZW1lbnQuaHRtbCgkKHJlc3BvbnNlKS5maW5kKCcuanMtY29udGFjdEZvcm0nKS5odG1sKCkpO1xuXHRcdFx0XHR9KS5mYWlsKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRcdGFsZXJ0KCdOw6Vnb250aW5nIGdpY2sgZmVsIG9jaCBtZWRkZWxhbmRldCBrdW5kZSB0eXbDpHJyIGludGUgc2tpY2thcy4gVsOkbmxpZ2VuIGbDtnJzw7ZrIGlnZW4uJyk7XG5cdFx0XHRcdFx0dGhpc0VsZW1lbnQuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59IiwidmFyIGp1bGlhbWFyaWMgPSBqdWxpYW1hcmljIHx8IHt9O1xuXG5qdWxpYW1hcmljLnRvZ2dsZUZvb3RlciA9IHtcblx0ZGVmYXVsdHM6IHtcblx0XHRmb290ZXI6ICQoJy5mb290ZXInKSxcblx0XHRmb290ZXJPZmZzZXQ6ICQoJy5mb290ZXInKS5vZmZzZXQoKVxuXHR9LFxuXG5cdGluaXQ6IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHRzZWxmLmJpbmRFdmVudHMoc2VsZik7XG5cdH0sXG5cblx0YmluZEV2ZW50czogZnVuY3Rpb24gKHNlbGYpIHtcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi50b2dnbGVyKHNlbGYpO1xuXHRcdH0pO1xuXHR9LFxuXG5cdHRvZ2dsZXI6IGZ1bmN0aW9uIChzZWxmKSB7XG5cblx0XHRpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPj0gc2VsZi5kZWZhdWx0cy5mb290ZXJPZmZzZXQudG9wKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnc2hvdycpO1xuXHRcdFx0c2VsZi5kZWZhdWx0cy5mb290ZXIuZmluZCgnLmZvb3Rlci1jb250ZW50Jykuc2hvdygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnaGlkZScpO1xuXHRcdFx0c2VsZi5kZWZhdWx0cy5mb290ZXIuZmluZCgnLmZvb3Rlci1jb250ZW50JykuaGlkZSgpO1xuXHRcdH1cblx0fVxufSJdfQ==
