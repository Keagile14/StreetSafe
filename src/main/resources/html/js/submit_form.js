document.getElementById('crimeType').addEventListener('change',function (){

    var otherInput = document.getElementById('otherInput');
    if (this.value === 'other' ){

        otherInput.style.display = 'block';
    } else {
        otherInput.style.display = 'none';
        otherInput.value = '';
    }
});

document.getElementById('reportForm').addEventListener('submit',function (e){

    e.preventDefault();

    const crimeSelect = document.getElementById('crimeType');
    let crimeType = crimeSelect.value;

    const otherInput = document.getElementById('otherInput');
    if (crimeType === 'other') {
        crimeType = otherInput.value || 'Other';
    }
    const location = document.getElementById('location').value;

    const description = document.getElementById('description').value;

    const report = {
        crimeType: crimeType,
        description: description,
        location: location,
        status: "Pending"


    };


    fetch('http://localhost:8080/reports',{
        method: 'POST',
        headers: {
            'content-Type' : 'application/json'
        },
        body: JSON.stringify(report)
    })
        .then(response => response.json())
        .then(date => {
            alert('Report submitted sucessfully! ID:' + date.id);
            document.getElementById('reportForm').reset();
            document.getElementById('otherInput').style.display = 'none';
        })

        .catch(error => {
            console.error('Error:',error);
            alert('Failed to submit report.')
        })
});