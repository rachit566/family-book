var images = ["https://as2.ftcdn.net/v2/jpg/02/66/85/51/1000_F_266855106_mmJPXHbTqzFwOGo7EdXJfiowZ77It0hV.jpg","https://thumbs.dreamstime.com/z/father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395.jpg","https://thumbs.dreamstime.com/z/mother-portrait-beautiful-woman-long-brown-hair-young-standing-maternity-mom-vector-illustration-86364538.jpg","https://lh6.googleusercontent.com/proxy/ftC6WbwMF_wCDLYN0BD1NfCVpISs8PkVwQ9Sq_xsL5tTEwGEgV2urJswIRBOyMKJTcyLlQXIvWlbZ_uew8berjdwvP-mzTbAfe8Rj62b5pPQWGI5hg=w1200-h630-p-k-no-nu","https://photocartoon.net/1643200452737/newcartoon.jpg"];
var names = ["Munni joshi","Rajendra prasad joshi","Tanuja joshi","Sakshi joshi","Rachit joshi"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}