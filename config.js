
function getQueryParameter(param) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

var inputData = getQueryParameter('data');
var nameGirl;
var titleCard;
var giftImage;
var contentCard;
if (decodeURIComponent(inputData) == "thùy" || decodeURIComponent(inputData) == "THÙY" || decodeURIComponent(inputData) == "Thùy" || decodeURIComponent(inputData) == "thuỳ" || decodeURIComponent(inputData) == "Thuỳ") {
    nameGirl = "Gì " + decodeURIComponent(inputData);
    titleCard = "Gì " + decodeURIComponent(inputData);
    giftImage = "gi.jpg";
    contentCard = 'Nhân ngày 20/10, cháu xin gửi lời chúc tốt đẹp nhất đến dì. Chúc dì luôn khỏe mạnh, hạnh phúc và thành công trong mọi việc. Cháu chúc gì nhận được nhiều hoa và những lời chúc tốt đẹp từu những người thân yêu <3';
} else if (decodeURIComponent(inputData) == "liên" || decodeURIComponent(inputData) == "Liên") {
    nameGirl = "Chị " + decodeURIComponent(inputData);
    titleCard = "Chị " + decodeURIComponent(inputData);
    giftImage = "chilien.jpg"
    contentCard = 'Ngày 20/10, em chúc chị nhiều niềm vui, nhiều sức khỏe và luôn đạt được mọi điều chị mong muốn. Em luôn tự hào khi có một người chị tài giỏi và tuyệt với hihiiihiiii';
} else if (decodeURIComponent(inputData) == "Vân" || decodeURIComponent(inputData) == "vân") {
    nameGirl = "Chị " + decodeURIComponent(inputData);
    titleCard = "Chị " + decodeURIComponent(inputData);
    giftImage = "chi.jpg";
    contentCard = 'Ngày 20/10, em chúc chị có một ngày thật vui vẻ và tràn đầy niềm vui. Chị luôn là người em ngưỡng mộ và yêu thương nhất. Chúc chị mọi điều tốt lành nhé!';
} else if (decodeURIComponent(inputData) == "Bình" || decodeURIComponent(inputData) == "bình") {
    nameGirl = "Mợ " + decodeURIComponent(inputData);
    titleCard = "Mợ " + decodeURIComponent(inputData);
    giftImage = "mo.jpg";
    contentCard = 'Ngày 20/10, cháu kính chúc mợ thật nhiều sức khỏe, niềm vui và sự thành công. Mợ luôn là người phụ nữ mà con ngưỡng mộ, là hình mẫu lý tưởng mà cháu muốn học hỏi theo.';
} else if (decodeURIComponent(inputData) == "Hoa" || decodeURIComponent(inputData) == "hoa") {
    nameGirl = "Bà ";
    titleCard = "Bà ";
    giftImage = "mo.jpg";
    contentCard = 'Ngày 20/10, cháu kính chúc mợ thật nhiều sức khỏe, niềm vui và sự thành công. Mợ luôn là người phụ nữ mà con ngưỡng mộ, là hình mẫu lý tưởng mà cháu muốn học hỏi theo.';

}

const giftUrl = 'http://nodemy.vn';
const eventName = 'Chúc Mừng 20-10';





const base64 = '';
const giftImageBase64 = "data:image/png;base64, " + base64;