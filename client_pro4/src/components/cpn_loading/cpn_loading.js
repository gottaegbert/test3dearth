import "./cpn_loading.css";

export function Cpn_loading() {
    return (    
        <div style={{position : 'fixed',top : '0' , bottom : '0', left : '0', right : '0',zIndex: '4',display : 'flex' , justifyContent : 'center',alignItems: 'center'}}>
            
            <div class="content_loading">
            </div>
            
            <img className="loading_image" style={{borderRadius : '50%',height : '20%'}} src={require('../../public/img/img_loading/cloud_loading.gif')} />
            
        </div>
    )
}