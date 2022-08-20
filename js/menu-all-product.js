var misa_site="https://www.misa.vn";jQuery(document).ready(function($){if(window.location.href.indexOf(".local")>-1){misa_site="https://www.website.misa.local";}
checkMenuLazy=false;function loadMenuLazy(){if(!checkMenuLazy){if($(".header-top-custom").length>0){if(window.innerWidth>=980){if($(".cmi-content-item").length===0){var html=renderHTMLMenu.renderHTMLMenuAllProductForPC();$("#custom-menu-item").empty();$("#custom-menu-item").append(html);}
menuListProduct.menuAllProductForPC();}
else{menuListProduct.menuAllProductForMobile();}}
$("#collapseProduct").on("show.bs.collapse hide.bs.collapse",function(e){if(e.type=="show"){$("#collapseLink.collapse-link a").text("Thu gọn");$(this).show();}
else{$("#collapseLink.collapse-link a").text("Các sản phẩm khác >>");$(this).hide();}});$("#collapseProductQTNS").on("show.bs.collapse hide.bs.collapse",function(e){if(e.type=="show"){$("#collapseLinkQTNS.collapse-link a").text("Thu gọn");$(this).show();}
else{$("#collapseLinkQTNS.collapse-link a").text("Các sản phẩm khác >>");$(this).hide();}});$("#collapseProductQLDH").on("show.bs.collapse hide.bs.collapse",function(e){if(e.type=="show"){$("#collapseLinkQLDH.collapse-link a").text("Thu gọn");$(this).show();}
else{$("#collapseLinkQLDH.collapse-link a").text("Các sản phẩm khác >>");$(this).hide();}});$("#collapseProductMarketing").on("show.bs.collapse hide.bs.collapse",function(e){if(e.type=="show"){$("#collapseLinkMarketing.collapse-link a").text("Thu gọn");$(this).show();}
else{$("#collapseLinkMarketing.collapse-link a").text("Các sản phẩm khác >>");$(this).hide();}});checkMenuLazy=true;}};addListenerMulti(window,'scroll mousemove touchstart',loadMenuLazy);});function addListenerMulti(el,s,fn){s.split(' ').forEach(e=>el.addEventListener(e,fn,false));};window.onresize=function(a,b,c){if(window.innerWidth>=980){menuListProduct.menuAllProductForPC();}
else{menuListProduct.menuAllProductForMobile();}};var menuListProduct={menuAllProductForPC:function(){if(window.innerWidth>=980){var me=this;jQuery(".h-product-pc").unbind("click",".header").bind("click",".header",function(){var heightMenuProductPC=document.getElementById("custom-menu-item").clientHeight;if(heightMenuProductPC>0){jQuery("#custom-menu-item").css("max-height","0px");jQuery(".header-content-menu").removeClass("border-bottom");jQuery(".h-product-pc").removeClass("up");}
else{jQuery("#custom-menu-item").css("max-height","720px");jQuery(".header-content-menu").addClass("border-bottom");jQuery(".h-product-pc").addClass("up");}});me.mouseupClickMenuProductEvent();me.keyupEscMenuProductEvent();}},menuAllProductForMobile:function(){if(jQuery(".h-option-select-product").length===0){var html=renderHTMLMenu.renderHTMLMenuAllProductForMobile();jQuery(".h-product-mobile").append(html);}
jQuery(".h-option-select-product").on("change",function(){var value=jQuery(this).val();if(value!=undefined&&value!=""&&value!=null){window.location=value;}});},mouseupClickMenuProductEvent:function(){jQuery("body").mouseup(function(e){var heightMenuProductPC=document.getElementById("custom-menu-item").clientHeight;if(heightMenuProductPC>0){if(jQuery(".td-header-menu-wrap-full").has(e.target).length===0){jQuery("#custom-menu-item").css("max-height","0px");jQuery(".header-content-menu").removeClass("border-bottom");jQuery(".h-product-pc").removeClass("up");}}});},keyupEscMenuProductEvent:function(){jQuery(document).keyup(function(e){if(e.key==="Escape"){var heightMenuProductPC=document.getElementById("custom-menu-item").clientHeight;if(heightMenuProductPC>0){if(jQuery(".td-header-menu-wrap-full").has(e.target).length===0){jQuery("#custom-menu-item").css("max-height","0px");jQuery(".header-content-menu").removeClass("border-bottom");jQuery(".h-product-pc").removeClass("up");}}}});},};var renderHTMLMenu={renderHTMLMenuAllProductForPC:function(){menuAllProductCSS();var follow=''
if(jQuery('.is-misa').length==0){follow='rel="nofollow"';}
var html='<div class="menu-all-product">'+
'<ul class="map-tab-group">'+
"<li>"+
'<a href="#tab_administration" data-toggle="tab">Khối cơ quan Nhà nước</a>'+
"</li>"+
'<li class="active">'+
'<a href="#tab_enterprise" data-toggle="tab">Khối doanh nghiệp</a>'+
"</li>"+
"</ul>"+
'<div class="tab-content">'+
'<div id="tab_administration" class="tab-pane fade">'+
'<div class="map-group-product" style="width:48%">'+
'<div class="map-group-product-column" style="width:52%">'+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm quản lý dự án</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Thi đua - Khen thưởng</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div class="map-group-product-column" style="width:48%">'+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý tài sản cố định</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý Cán bộ công chức</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
"</div>"+
'<div class="map-group-product" style="width:27%">'+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
"</a>"+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý tiền lương</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý thiết bị dạy học</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
'<div class="map-group-product" style="width:25%;">'+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý tổng hợp báo cáo - NT</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
"</div>"+
'<div id="tab_enterprise" class="tab-pane active fade in">'+
'<div class="map-group-product" style="width:25%">'+
'<div class="map-group-product-column" style="width:100%">'+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý nhuận bút</div>'+
"</div>"+
"</div>"+
"</a>"+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý bán hàng</div>'+
"</div>"+
"</div>"+
"</a>"+
"</div>"+
"<div>"+
'<div class="map-group-product-column" id="collapseProduct" class="collapse" style="width:100%;display:none">'+
"</div>"+
"</div>"+
"</div>"+
'<div class="map-group-product" style="width:25%">'+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Kế toán danh nghiệp</div>'+
"</div>"+
"</div>"+
"</a>"+
"<div>"+
"</div>"+
"</div>"+
'<div class="map-group-product" style="width:25%">'+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý phòng khám</div>'+
"</div>"+
"</div>"+
"</a>"+
"<div>"+
'<div class="map-group-product-column" id="collapseProductQTNS" class="collapse" style="width:100%;display:none">'+
"</div>"+
"</div>"+
"</div>"+
'<div class="map-group-product" style="width:25%">'+
'<a href="http://nhattamsoft.vn/" target="_blank" '+follow+'>'+
'<div class="map-product-item">'+
'<div class="map-product-info">'+
'<div class="map-product-name">Phần mềm Quản lý vé số</div>'+
"</div>"+
"</div>"+
"</a>"+
"<div>"+
'<div class="map-group-product-column" id="collapseProductQLDH" class="collapse" style="width:100%;display:none">'+
"</div>"+
"</div>"+
"</div>"+
"</div>"+
"</div>";return html;},renderHTMLMenuAllProductForMobile:function(){var follow=''
if(jQuery('.is-misa').length==0){follow='rel="nofollow"';}
var html="";html=html.concat('<select class="h-option-select h-option-select-product">'+
'<option value="" selected disabled hidden>Tất cả sản phẩm MISA</option>'+
'<optgroup label="Cơ quan Nhà nước">'+
'<option value="https://bumas.misa.vn/" '+follow+'>MISA Bumas - Quản lý ngân sách</option>'+
'<option value="https://mimosa.misa.vn/" '+follow+'>MISA Mimosa 2022 - Kế toán HCSN</option>'+
'<option value="https://bamboo.misa.vn/" '+follow+'>MISA Bamboo.NET 2020 - Kế toán xã/phường</option>'+
'<option value="https://qlts.misa.vn/" '+follow+'>MISA QLTS - Quản lý tài sản</option>'+
'<option value="https://salagov.misa.vn/" '+follow+'>MISA SalaGov - Quản lý tiền lương</option>'+
'<option value="https://panda.misa.vn/" '+follow+'>MISA Panda.NET 2021 - Kế toán Thi hành án dân sự </option>'+
'<option value="https://falcon.misa.vn/" '+follow+'>MISA Falcon - Kế toán Quỹ "Vì người nghèo"</option>'+
'<option value="https://lekima.misa.vn/" '+follow+'>MISA Lekima - Quyết toán tài chính</option>'+
'<option value="https://emis.misa.vn/" '+follow+'>MISA EMIS - Quản lý trường học</option>'+
'<option value="https://sisap.misa.vn/" '+follow+'>MISA SISAP - Chia sẻ thông tin Nhà trường – Phụ huynh</option>'+
'<option value="https://jetpay.vn/jetpay-tuition/" '+follow+'>JetPay Tuition - Thu tiền học trực tuyến</option>'+
'<option value="https://qlcb.misa.vn/" '+follow+'>MISA QLCB - Quản lý Cán bộ - Công chức, Viên chức</option>'+
'<option value="https://hotich.misa.vn/" '+follow+'>MISA Hotich - Đăng ký và Quản lý hộ tịch</option>'+
'<option value="http://eoffice.misa.vn/taskgo/">MISA TaskGo - Quản lý công việc</option>'+
'<option value="http://eoffice.misa.vn/cegov/">MISA CeGov - Quản lý Thi Đua Khen Thưởng</option>'+
"</optgroup>"+
'<optgroup label="Doanh nghiệp">'+
'<option value="https://sme.misa.vn/" '+follow+'>MISA SME 2022 - Quản lý kế toán (offline)</option>'+
'<option value="https://amis.misa.vn/amis-ke-toan/" '+follow+'>AMIS Kế toán</option>'+
'<option value="https://www.meinvoice.vn/" '+follow+'>MISA meInvoice - Hóa đơn điện tử</option>'+
'<option value="https://asp.misa.vn/" '+follow+'>MISA ASP - Kế toán dịch vụ</option>'+
'<option value="https://lending.misa.vn/" '+follow+'>MISA Lending - Kết nối vay vốn doanh nghiệp</option>'+
'<option value="https://mtax.misa.vn/" '+follow+'>MISA mTax - Kê khai, nộp tờ khai thuế</option>'+
'<option value="https://esign.misa.vn/" '+follow+'>MISA eSign - Chữ ký số điện tử</option>'+
'<option value="https://bankhub.misa.vn/" '+follow+'>MISA BankHub - Ngân hàng điện tử</option>'+
'<option value="https://amis.misa.vn/phan-mem-crm-amis/" '+follow+'>AMIS Bán hàng - Quản lý bán hàng</option>'+
'<option value="https://amis.misa.vn/amis-khuyen-mai/" '+follow+'>AMIS Khuyến mại - Quản lý khuyến mại</option>'+
'<option value="https://jetpay.vn/jetpay-payment/" '+follow+'>JetPay Payment - Cổng thanh toán</option>'+
'<option value="https://amis.misa.vn/amis-aimarketing/" '+follow+'>AMIS aiMarketing - Công cụ Automation Marketing</option>'+
'<option value="https://amis.misa.vn/amis-tuyen-dung/" '+follow+'>AMIS Tuyển dụng - Quản lý tuyển dụng</option>'+
'<option value="https://amis.misa.vn/thong-tin-nhan-su/" '+follow+'>AMIS Thông tin nhân sự - Hệ thống thông tin nhân sự</option>'+
'<option value="https://amis.misa.vn/phan-mem-cham-cong/" '+follow+'>AMIS Chấm công - Quản lý chấm công</option>'+
'<option value="https://amis.misa.vn/tien-luong/" '+follow+'>AMIS Tiền lương - Tính toán và quản lý tiền lương</option>'+
'<option value="">AMIS Nhân viên - Coming soon 2021</option>'+
'<option value="https://amis.misa.vn/phan-mem-bao-hiem-xa-hoi/" '+follow+'>AMIS BHXH - Bảo hiểm xã hội điện tử</option>'+
'<option value="https://amis.misa.vn/amis-cong-viec/" '+follow+'>AMIS Công việc - Quản lý công việc</option>'+
'<option value="https://amis.misa.vn/amis-ghi-chep/" '+follow+'>AMIS Ghi chép - Ghi chép & lưu trữ tài liệu</option>'+
'<option value="https://amis.misa.vn/amis-wesign/" '+follow+'>AMIS WeSign - Ký tài liệu số</option>'+
'<option value="https://amis.misa.vn/amis-mang-xa-hoi-doanh-nghiep/" '+follow+'>AMIS Mạng xã hội - Mạng xã hội doanh nghiệp</option>'+
'<option value="https://amis.misa.vn/amis-tai-san/" '+follow+'>AMIS tài sản - Quản lý tài sản</option>'+
'<option value="https://amis.misa.vn/amis-phong-hop/" '+follow+'>AMIS Phòng họp - Quản lý phòng họp</option>'+
'<option value="https://amis.misa.vn/amis-nhan-su/" '+follow+'>AMIS Nhân sự - Quản lý nhân sự</option>'+
"</optgroup>"+
'<optgroup label="Giải pháp bán lẻ">'+
'<option value="https://www.cukcuk.vn/" '+follow+'>MISA Cukcuk - Quản lý nhà hàng</option>'+
'<option value="https://www.cukcuk.vn/misa-lomas/" '+follow+'>MISA Lomas - Nghiệp vụ chăm sóc khách hàng</option>'+
'<option value="https://www.cukcuk.vn/ban-hang-online/" '+follow+'>Bán hàng Online - Xây dựng Website bán hàng chuyên nghiệp</option>'+
'<option value="https://www.cukcuk.vn/dang-ky-grabfood-cung-cukcuk/" '+follow+'>Kết nối GrabFood - Kết nối và đồng bộ đơn hàng từ GrabFood</option>'+
'<option value="https://eshop.misa.vn/" '+follow+'>MISA eShop - Quản lý cửa hàng</option>'+
'<option value="https://eshop.misa.vn/san-pham-ocm/" '+follow+'>MISA OCM - Nghiệp vụ Bán hàng online</option>'+
'<option value="https://eshop.misa.vn/misa-lomas/" '+follow+'>MISA Lomas - Nghiệp vụ chăm sóc khách hàng</option>'+
'<option value="https://moneykeeper.misa.vn/" '+follow+'>MISA MoneyKeeper - Quản lý tài chính cá nhân</option>'+
'<option value="https://golf.misa.vn/" '+follow+'>MISA Golf - Nền tảng cho Golfer</option>'+
"/optgroup>"+
"</select>");return html;},};function menuAllProductCSS(){if(!document.getElementById("css")){var head=document.getElementsByTagName("head")[0];var link=document.createElement("link");link.id="css";link.rel="stylesheet";link.type="text/css";link.href=misa_site+"/sites/menu/menu-all-product.css?ver=8";link.media="all";head.appendChild(link);}};var prevScrollpos=window.pageYOffset;window.onscroll=function(){if(jQuery(".header-top-custom").length>0){if(window.innerWidth>=980){if(!jQuery(".header-top-custom").is(":hover")){if(!jQuery(".td-header-menu-wrap").is(":hover")){var currentScrollPos=window.pageYOffset;var heightMenu=jQuery(".header-top-custom")[0].clientHeight;if(prevScrollpos>currentScrollPos){document.getElementsByClassName("td-header-menu-wrap-full")[0].style.top="0";}
else{if(currentScrollPos>heightMenu){var heightMenuProductPC=document.getElementById("custom-menu-item").clientHeight;if(heightMenuProductPC<=0){document.getElementsByClassName("td-header-menu-wrap-full")[0].style.top="-"+(heightMenu+1)+"px";}}}
prevScrollpos=currentScrollPos;}}}else{var currentScrollPos=window.pageYOffset;var heightMenu=jQuery(".header-top-custom")[0].clientHeight;if(prevScrollpos>currentScrollPos){document.getElementsByClassName("td-header-menu-wrap-full")[0].style.top="0";}
else{if(currentScrollPos>heightMenu){document.getElementsByClassName("td-header-menu-wrap-full")[0].style.top="-"+(heightMenu+1)+"px";}}
prevScrollpos=currentScrollPos;}}};