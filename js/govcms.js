$(document).ready(function(){$(".drupal-version-list").toggleClass("sr-only"),$(".drupal-version-checkbox").change(function(){$(".drupal-version-list").toggleClass("sr-only")}),$(".site-info-add").click(function(){var t=$(".site-info")[0].outerHTML,i=$(".site-info").length,e=i+1;return t=t.replace(/1\"/g,e+'"'),$(".site-info").last().after(t),!1}),$(".split").each(function(){rightHeight=$(".section-two",this).height(),$(".section-one",this).height(rightHeight)})});