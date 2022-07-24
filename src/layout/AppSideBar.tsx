const AppSideBar = (props: any) => {

    return (
        <div className={`side-bar ${props.sidebarExpand ? 'active' : ''}`}>
            <a href={void (0)} className="close-btn" onClick={() => props.setSidebarExpend(false)}>×</a>
            <a href={void (0)}>Login</a>
            <a href={void (0)}>Register</a>
            <a href={void (0)}>Home</a>
            <a href={void (0)}>About Us</a>
        </div>
    )
}

export default AppSideBar