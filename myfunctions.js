// Function to show property details
function showDetails(button) {
    var currentRow = $(button).closest('tr');
    var detailsRow = currentRow.next('.details-row');

    if (detailsRow.length > 0) {
        detailsRow.remove();
    } else {
        $('.details-row').remove();

        var rent = currentRow.find('td:nth-child(3)').text().trim();
        var details = currentRow.find('td:nth-child(4)').text().trim();
        var city = currentRow.find('td:nth-child(5)').text().trim();

        var additionalInfo = "";
        var imageUrl = "";

        
        if (city === '959-5455hr66674') {
            additionalInfo = "الكاتب:  غابرييل غارسيا ماركيز";
            imageUrl = 'image/100years of.webp'; 
        } else if (city === '959-5455hr0999009') {
            additionalInfo = "الكاتب: جورج أورويل";
            imageUrl = 'image/1984.jpeg'; 
        } else if (city === '959-5455hr878') {
            additionalInfo = "الكاتب: سلمان رشدي";
            imageUrl = 'image/quraane.webp'; 
        } else if (city === '959-5455hr4414') {
            additionalInfo = "الكاتب: فيودور دوستويفسكي";
            imageUrl = 'image/aljaremah.jpeg'; 
        } else if (city === '959-5455hr4452') {
            additionalInfo = "الكاتب: مارسيل بروست";
            imageUrl = 'image/alba7th 3n alzmn.jpg'; 
        } else if (city === '959-5455hr445632') {
            additionalInfo = "الكاتب: نجيب محفوظ";
            imageUrl = 'image/najeeb.jpeg'; 
        } else if (city === '959-5455hr44563') {
            additionalInfo = "الكاتب:  باتريك زوسكيند";
            imageUrl = 'image/al3etr.jpeg'; 
        } else if (city === '959-5455hr44122') {
            additionalInfo = "الكاتب: هاربر لي";
            imageUrl = 'image/kill an insent bird.jpg'; 
        } else if (city === '959-5455hr7741') {
            additionalInfo = "الكاتب:  نيكوس كازانتزاكيس";
            imageUrl = 'image/zorba al greek.png'; 
        } else if (city === '959-5455hr66325') {
            additionalInfo = "الكاتب: خالد حسيني";
            imageUrl = 'image/taeera.jpeg'; 
        }

        var newRow = `
            <tr class="details-row">
                <td colspan="${currentRow.find('td').length}">
                    <div>
                        <img src="${imageUrl}" alt="صورة الكتاب">
                        <p><strong> السعر:</strong> ${rent}</p>
                        <p><strong>التفاصيل:</strong> ${details}</p>
                        <p><strong>لعنوان:</strong> ${city}</p>
                        <p><strong>معلومات إضافية:</strong> ${additionalInfo}</p>
                    </div>
                </td>
            </tr>
        `;

        currentRow.after(newRow);
    }
}

$(document).ready(function () {
    // Function to open popup
    $('#openPopupBtn').click(function () {
        openPopup(); 
    });

    // Function to close popup
    $('#closePopupBtn').click(function () {
        $('#popup').fadeOut();
    });

    // Function to calculate total price of selected properties
    $('#submitBtn').click(function () {
        var selectedProperties = $('input[type="checkbox"]:checked').closest('tr'); 
        var totalPrice = 0;

        selectedProperties.each(function () {
            var priceText = $(this).find('td:nth-child(3)').text().trim(); 
            var price = parseInt(priceText.replace(/[^\d]/g, '')); 
            if (!isNaN(price)) {
                totalPrice += price; 
            }
        });

        $('#totalPriceMessage').text('السعر الإجمالي: ' + totalPrice + ' ليرة سورية'); 
    });

    // Function to submit form and show success message
    $('#submitFormBtn').click(function () {
        submitForm(); 
    });

    // Function to close success popup
    $('#closeSuccessPopupBtn').click(function () {
        $('#successPopup').fadeOut();
    });

    // Function to show property details
    $('.details-btn').click(function () {
        showDetails(this);
    });
});

// Function to submit form and show success message
function submitForm() {
    var form = document.getElementById('applicationForm');

  
    if (form.checkValidity()) {
        var totalPrice = calculateTotalPrice(); 

        if (totalPrice > 0) {
            openSuccessPopup(totalPrice); 
        } else {
            alert('الرجاء تحديد كتاب واحد على الأقل لاستكمال الطلب.'); 
        }
    } else {
        form.reportValidity(); 
    }
}

// Function to calculate total price of selected properties
function calculateTotalPrice() {
    var totalPrice = 0;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            var row = checkbox.parentNode.parentNode;
            var priceCell = row.cells[2];
            var priceText = priceCell.textContent.trim();
            var price = parseInt(priceText); 
            if (!isNaN(price)) {
                totalPrice += price;
            }
        }
    });

    return totalPrice;
}

// Function to open popup
function openPopup() {
    var popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'block';
    }
}

// Function to open success popup with total price
function openSuccessPopup(totalPrice) {
    var popup = document.getElementById('successPopup');
    if (popup) {
        var message = `مجموع أسعار الكتب المختارة: ${totalPrice} ليرة سورية<br>تم تسجيل الطلب بنجاح.`;
        popup.innerHTML = message;
        popup.style.display = 'block';
        setTimeout(function () {
            closeSuccessPopup();
        }, 5000);

    }
}

// Function to close success popup
function closeSuccessPopup() {
    var popup = document.getElementById('successPopup');
    if (popup) {
        popup.style.display = 'none';
    }
}


// Function to close popup
function closePopup() {
    var popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
    }
}

