// ==UserScript==
// @name         Show debug option for running
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://running.webdev.com/*
// @grant        none
// ==/UserScript==


(function(){
    var debug_button = $("<a>").text("����").attr("href", "#").click(function(){
        $table = $(".table.table-hover.table-list");
        $table.find("tr.ng-scope").each(function(){
            $id = $($(this).find("td")[0]).text();
            $button_container =  $(this).find(".oper-btn");
            if($button_container.find(".debug_button").size() === 0){
                $button_container.append('<a class="btn-export debug_button" alt="���Ƚ��" title="���Ƚ��" target="_blank" href="job/result?taskId=' + $id + '">���Ƚ��</a>');
                $button_container.append('<a class="btn-export debug_button" alt="ִ�н��" title="ִ�н��" target="_blank" href="job/joblog?taskId=' + $id + '">ִ�н��</a>');
            }
            
        });
    });


    $("body").prepend(debug_button);
})();