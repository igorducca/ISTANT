export function initNetlifyIdentity() {

    console.log('Netlify identity initiated!')
  
    const script = document.createElement('script')
    script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js"
    script.async = true;
  
    document.body.appendChild(script)
}

export function openNetlifyModal() {
    const netilifyIdentity = window.netlifyIdentity;

    if(netilifyIdentity) {
        netilifyIdentity.open()
    }
    else {
        console.log("Netlify Identify isn't working")
    }
}