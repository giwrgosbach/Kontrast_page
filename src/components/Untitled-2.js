/**
 * Created by terminal8 on 19/01/16.
 */
var lastOrderId;
var trackerRefresh = 30000;
var deliveryMethod;
var order_data = {};
//var Tran = localStorage.getItem("_Tr");
//var step = {
//    1	: {title:"ΞΞ�ΟΞ· Ξ Ξ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο",description:"ΞΟΟΞ±ΟΞΉΟΟΞΏΟΞΌΞ΅ ΟΞΏΞ»Ο! ΞΟΞ»ΞΉΟ Ξ­Ξ»Ξ±Ξ²Ξ΅ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΞ±Ο ΟΞΏ ΞΊΞ±ΟΞ¬ΟΟΞ·ΞΌΞ±"},
//    2	: {title:"ΞΟΞΏΞΉΞΌΞ±ΟΞ―Ξ±",description:"ΞΟΟΞ� ΟΞ· ΟΟΞΉΞ³ΞΌΞ� Ξ΅ΟΞΏΞΉΞΌΞ¬ΞΆΞΏΟΞΌΞ΅ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± Ξ±ΟΞΏΞΊΞ»Ξ΅ΞΉΟΟΞΉΞΊΞ¬ Ξ³ΞΉΞ± Ξ΅ΟΞ¬Ο Ξ±ΞΊΟΞΉΞ²ΟΟ ΟΟΟΟ ΟΞ·Ξ½ ΞΆΞ·ΟΞ�ΟΞ±ΟΞ΅!"},
//    3	: {title:"Ξ¨Ξ�ΟΞΉΞΌΞΏ",description:"ΞΟΞ»ΞΉΟ ΞΌΟΞ�ΞΊΞ΅ ΟΟΞΏ ΟΞΏΟΟΞ½ΞΏ! ΞΞΉΞ± ΟΞ± Ξ΅ΟΟΞΌΞ΅Ξ½Ξ± 5 - 6 Ξ»Ξ΅ΟΟΞ¬ Ξ· ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΞ±Ο ΟΞΉΞ³ΞΏΟΞ�Ξ½Ξ΅ΟΞ±ΞΉ ΟΟΞΏΟΟ 245  Ξ²Ξ±ΞΈΞΌΞΏΟΟ!"},
//    4	: {title:"Ξ ΞΏΞΉΞΏΟΞΉΞΊΟΟ ΞΞ»Ξ΅Ξ³ΟΞΏΟ",description:"Ξ€ΟΟΞ± ΞΊΞ¬Ξ½ΞΏΟΞΌΞ΅ ΟΞΏΞ½ Ξ­Ξ»Ξ΅Ξ³ΟΞΏ ΟΞΏΞΉΟΟΞ·ΟΞ±Ο ΟΞ·Ο ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο ΟΞ±Ο ΞΌΞ΅ ΟΞΉΟ Ξ±ΟΟΟΞ·ΟΞ­Ο ΟΟΞΏΞ΄ΞΉΞ±Ξ³ΟΞ±ΟΞ­Ο ΟΞ·Ο Dominos"},
//    5	: {title:"Ξ£ΟΞΏ ΞΟΟΞΌΞΏ",description:"Ξ¦ΟΞ³Ξ±ΞΌΞ΅! Ξ£Ξ΅ Ξ»Ξ―Ξ³Ξ± Ξ»Ξ΅ΟΟΞ¬ ΞΈΞ± ΞΌΞ±Ο Ξ΄Ξ΅Ξ―ΟΞ΅ ΟΞ±ΞΌΞΏΞ³Ξ΅Ξ»Ξ±ΟΟΞΏΟΟ ΟΟΞ·Ξ½ ΟΟΟΟΞ± ΟΞ±Ο!"},
//    6	: {title:"ΞΞ»ΞΏΞΊΞ»Ξ�ΟΟΟΞ· ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ±Ο",description:"ΞΟΞΏΟΞ΅Ξ―ΟΞ΅ Ξ½Ξ± Ξ±ΟΞΏΞ»Ξ±ΟΟΞ΅ΟΞ΅ ΟΞ·Ξ½ ΟΞ±ΟΞ±Ξ³Ξ³Ξ΅Ξ»Ξ―Ξ± ΟΞ±Ο!"}
//};

//console.log(orderType);

$(document).ready(function () {

    setTimeout(function () {
        $('#loading').fadeOut('800');
    }, 1000);

    changeStatus("No_Order");
    // new Promise(function (resolve, reject) {
        getLastOrder();
        // resolve();
    // }).then(function () {
    //     console.log(lastOrderId);
    //     console.log(order_data);
    //     // if(data) {
    //     //     if (typeof mixpanel !== 'undefined') {
    //     //         mixpanel.track("Placed Order", data);
    //     //     }
    //     // }else{
    //     //     setTimeout(function(){
    //     //         if (typeof mixpanel !== 'undefined') {
    //     //             mixpanel.track("Placed Order", data);
    //     //         }
    //     //     },2000)
    //     // }
    //     if (lastOrderId) {
    //         if (typeof mixpanel !== 'undefined') {
    //             console.log(order_data);
    //             mixpanel.track("Placed Order", order_data);
    //         }
    //     }
    // });


    if ($("#last_order").length > 0) {
        $.post(_SitePath_ + "ajax/order.php", {"get_archive": true, "last_order": true}, function (data) {
            if (data) {
                typeof _gscq !== 'undefined' && _gscq.push(['targeting', 'activeOrder', 'true']);
                $("#last_order").html(data);
                setCustomFillToSvg();
            }
        });
    }
});

function runtracker() {
    setTimeout(function () {
        if (!lastOrderId) {
            getLastOrder();
        } else {
            $.post(_SitePath_ + "ajax/actions.php", {'check_status': 'check', 'order_id': lastOrderId}, function (status) {
                changeStatus(status);
            });
            runtracker();
        }
    }, trackerRefresh);
}

function getLastOrder() {
    $.post(_SitePath_ + "ajax/actions.php", {"get_customer_last_order": "get"}, function (data) {
        lastOrderId = (data.order_id) ? data.order_id : "";
        deliveryMethod = (data.delivery_method) ? data.delivery_method : "";
        if (!data.order_id || (data.order_id && (data.status == 'V' || data.status == 'B'))) {

            $(".order-details-container").hide();
            if ($(".order-container").hasClass('col-md-6')) {
                $(".order-container").removeClass('col-md-6').removeClass('tracker-border-r').addClass('col-md-12').show();
            }
            $(".tracker-step-total").hide();
            $(".tracker-step-pt").hide();
            $(".order_price").html('');
            $(".pay_type").html('');
            $('.order_type').html('');

            $(".order_address").html('');
            $(".order_store").html('');
            $(".order_type_label").html('');
            $(".store_phone").html('');
            $(".delivery_type").html('');
            $(".delivery_at").html('');
            $(".time_label").html('');


            changeStatus("No_Order");
        } else if (data.order_id) {
            order_data = data;
            if ($(".order-container").hasClass('col-md-12')) {
                $(".order-container").removeClass('col-md-12').addClass('col-md-6').addClass('tracker-border-r').show();
            }
            $(".order-details-container").show();
            $(".tracker-step-total").show();
            $(".tracker-step-pt").show();
            $(".order_price").html(data.price);
            $(".pay_type").html(data.pay_method);

            $(".order_address").html(data.order_address);
            $(".order_store").html(data.order_store);
            $(".order_type_label").html(data.order_type_title);
            $(".store_phone").html(data.store_phone);
            $(".delivery_type").html(data.delivery_method_text);
            $(".delivery_at").html(data.delay_stamp);
            $(".time_label").html(data.time_label);
            $('.tracker-circle').css('width', '100%');

            if (data.delivery_method == 'D' || data.delivery_method == 'C') {
                $('.order_type').html(/*orderTypeTitle + ': ' + */orderType[data.delivery_method] + ' <span class="blue-txt">' + data.order_method + '</span>');
            }
            changeStatus(data.status);
        }
        runtracker();
    }, 'json');
}

function changeStatus(stat) {
    if (!stat) {
        setTracker(0);
    } else if (stat == "No_Order" || stat == "V" || stat == "B") {
        setTracker(-1);
    } else if (stat == "P") {
        setTracker(1);
    } else if (stat == "Q") {
        setTracker(3);
    } else if (stat == "O") {
        setTracker(2);
    } else if (stat == "D") {
        setTracker(4);
    } else {
        setTracker(5);
    }
}

var timer;

function setTracker(circleStepNum) {
    if (circleStepNum == -1) {
        $('.tracker-circle').attr('data-step', '0');   // /images/tracker/st1.svg
        $('.tacker-step-icon').attr('src', '/images/tracker_new/st1.svg');
        $('.tracker-step-details').hide();
        $('.no-order-wrapper').show();
        $('.tracker-circle').attr('class', 'tracker-circle no-order');
    } else if (circleStepNum < 6 && circleStepNum >= 0) {
        // easter egg kinder popup
        /*if(window.location.hostname == "www.dominos.gr" && !$('#49288d03_149081001').length){
         var source = "'//www.powr.io/powr.js' external-type='html'";
         $('body').append("<script src="+ source + "></"+ "script><div class='powr-popup' id='49288d03_1490181001'></div>");
         }*/
        $('#piece1, #piece2, #piece3, #piece4, #piece5').attr("class", "");
        $('.tracker-circle').attr('data-step', (circleStepNum + 1));
        $('.tacker-step-icon').attr('src', '/images/tracker_new/st' + (circleStepNum + 1) + '.svg');
        if ((circleStepNum == 4) || (circleStepNum == 5) && (deliveryMethod == 'D' || deliveryMethod == 'C') && step[circleStepNum + 1][deliveryMethod]) {
            var title = step[circleStepNum + 1][deliveryMethod]['title'];
            var desc = step[circleStepNum + 1][deliveryMethod]['description'];
            if (deliveryMethod == 'C') {
                desc += '<div class="font-bold">' + $('.order_type span').html() + '</div>';
            }
        } else {
            var title = step[circleStepNum + 1]['title'];
            var desc = step[circleStepNum + 1]['description'];
        }
        $('.tracker-step-title').html(title);
        $('.tracker-step-desc').html(desc);
        $('.no-order-wrapper').hide("fast", function () {
            $('.tracker-circle').attr('class', 'tracker-circle');
            $('.tracker-step-details').show("fast");
        });

        switch (circleStepNum) {
            case 0:
                $('#piece1').attr('class', 'tracker-circle-step-active');
                changeFillAttr();
                break;
            case 1:
                clearInterval(timer);
                $('#piece1').attr('class', 'tracker-circle-step-complete');
                $('#piece2').attr('class', 'tracker-circle-step-active');
                changeFillAttr();
                break;
            case 2:
                clearInterval(timer);
                $('#piece1').attr('class', 'tracker-circle-step-complete');
                $('#piece2').attr('class', 'tracker-circle-step-complete');
                $('#piece3').attr('class', 'tracker-circle-step-active');
                changeFillAttr();
                break;
            case 3:
                clearInterval(timer);
                $('#piece1').attr('class', 'tracker-circle-step-complete');
                $('#piece2').attr('class', 'tracker-circle-step-complete');
                $('#piece3').attr('class', 'tracker-circle-step-complete');
                $('#piece4').attr('class', 'tracker-circle-step-active');
                changeFillAttr();
                break;
            case 4:
                clearInterval(timer);
                $('#piece1').attr('class', 'tracker-circle-step-complete');
                $('#piece2').attr('class', 'tracker-circle-step-complete');
                $('#piece3').attr('class', 'tracker-circle-step-complete');
                $('#piece4').attr('class', 'tracker-circle-step-complete');
                $('#piece5').attr('class', 'tracker-circle-step-active');
                changeFillAttr();
                break;
            case 5:
                $('.tracker-circle path').attr('class', 'tracker-circle-complete');
                break;
        }
    }
}

function changeFillAttr(elem) {
    timer = setInterval(function () {
        $('.tracker-circle-step-active').attr('fill', '#db092e');
        setTimeout(function () {
            $('.tracker-circle-step-active').attr('fill', '#006fa6');
        }, 1000);
    }, 2000);
    //timer = setInterval(function(){
    //    elem.attr('fill', '#db092e');
    //    setTimeout(function(){
    //        elem.attr('fill', '#006fa6');
    //    },1000);
    //},2000);
}