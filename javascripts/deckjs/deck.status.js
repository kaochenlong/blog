(function(a,b,c){var d=a(document);a.extend(!0,a[b].defaults,{selectors:{statusCurrent:".deck-status-current",statusTotal:".deck-status-total"}}),d.bind("deck.init",function(){a(a[b]("getOptions").selectors.statusCurrent).text(1),a(a[b]("getOptions").selectors.statusTotal).text(a[b]("getSlides").length)}).bind("deck.change",function(c,d,e){a(a[b]("getOptions").selectors.statusCurrent).text(e+1)})})(jQuery,"deck")