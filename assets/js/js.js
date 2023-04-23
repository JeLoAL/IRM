const data ={
    note: "Note: For easy reference and tracking purposes, please do not change the subject line of this email.",
    footer: "IT Service Desk<br>Self-Service Portal : ITServicePortal.Eisai.com<br><br>Support Information<br>US(Internal)                : Extension 3822<br>US & Canada (Toll Free)            : 1.888.442.6334<br>Mexico (Toll Free)                : 1.800.083.4912<br>Brazil (Toll Free)                : 0.800.047.4727<br>International (All Other Countries)        : 1.703.466.7700<br>Email                    : ITServiceDesk@eisai.com<br><br>To help you with your inquiry, our agents will record some of your personal data in our systems. This includes your name, phone number and email address. We store this information for audit purposes. Further information and your rights are found at https://www.eisai.co.uk/privacy-policy"
}
$(document).ready(function(){
    $('#mainInput').on('input', function(){

        const impactedUser = $('.impactedUser').val()
        const ticketNumber = $('.ticketNumber').val()
        const agentName = $('.agentName').val()
 
        $('#etacReq').hide()
        $('#passwordReq').hide()

        const emailType = $('#emailType').val()

        if (emailType=="ETAC EMAIL NOTIFICATION"){

            $('#etacReq').show()

            const assignmentGroup = $('.assignmentGroup').val()

            $('.generatedEmail').html(`
                <p>Hi ${impactedUser},</p>
                <p>Good day! Following through the IT Service Desk ticket notification email sent to you, please be informed that your ticket ${ticketNumber} has been assigned to the appropriate resolver ${assignmentGroup}.
                <br><br>
                The assigned resolver team will get back to you the soonest. Should you have additional clarifications and/or concerns, kindly reach out to our IT Service Desk using the Contact Information and Platforms indicated below.
                <br><br>
                To better facilitate your follow-up, please take note of your incident number: ${ticketNumber} and inform our support resources.
                </p>
                <p>Regards,<br><br>${agentName}<br>${data.footer}</p>
                <p></p>
            `)
        }
        else if(emailType=="PASSWORD EMAIL NOTIFICATION"){
            
            $('#passwordReq').show()
            const accountType = $('.accountType').val()
            const credential = $('.credential').val()
            if (accountType == "VDI" || accountType == "Cloud PC"){
                var newAccountType = `Thank you for connecting with us. We are pleased to assist you in your ${accountType} access request.`
                console.log(newAccountType)
            }
            else{
                var newAccountType = `Thank you for connecting with us. We are pleased to assist you in your request for ${accountType} password reset`
                console.log(newAccountType)
            }
            if (credential == "Password"){
                $('#showUsernameInput').hide()
                $('#showPasswordInput').show()
                const password = $('.password').val()
                $('.generatedEmail').html(`
                    <p>Hi ${impactedUser},</p>
                    <p>${newAccountType}
                    <br><br>
                    Here is your temporary password.
                    <br><br>
                    Password: ${password}
                    <br><br>
                    To ensure the security of your account, please make sure to create your new password.
                    <br><br>
                    Below are requirements to guide you in your password creation.<br>
                         - must be at least 8 characters<br>
                         - must not be derived from your Username or Login Name<br>
                         - must be different from the previous passwords<br>
                         - must contain characters from three of the following four classes: Upper Case, Lower Case, Numerals and Special Characters
                    <br><br>
                    Should you have additional clarifications and/or concerns, kindly reach out to our IT Service Desk using the Contact Information and Platforms indicated below.
                    To better facilitate your follow-up, please take note of your incident number: ${ticketNumber} and inform our support resources.
                    </p>
                    <p>Regards,<br><br>${agentName}<br>${data.footer}</p>
                    <p></p>
                `)
            }
            else if (credential == "Username"){
                $('#showUsernameInput').show()
                $('#showPasswordInput').hide()
                const username = $('.username').val()
                $('.generatedEmail').html(`
                    <p>Hi ${impactedUser},</p>
                    <p> ${newAccountType}
                    <br><br>
                    Here is your username.
                    <br><br>
                    Username: ${username}
                    <br><br>
                    Should you have additional clarifications and/or concerns, kindly reach out to our IT Service Desk using the Contact Information and Platforms indicated below.
                    To better facilitate your follow-up, please take note of your incident number: ${ticketNumber} and inform our support resources.
                    </p>
                    <p>Regards,<br><br>${agentName}<br>${data.footer}</p>
                    <p></p>
                `)
            }
        }
    });
});
