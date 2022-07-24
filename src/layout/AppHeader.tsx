const AppHeader = (props: any) => {

    return (
        <div className="header">
            <div className="sides"> <a href={void (0)} className="logo">BLOG</a></div>
            <div className="info"><h1 style={{ color: 'black' }}> the blog post project </h1></div>
            <div className="sides"> <a href={void (0)} className="menu" onClick={() => props.setSidebarExpend(true)}> </a></div>
        </div>
    )
}

export default AppHeader