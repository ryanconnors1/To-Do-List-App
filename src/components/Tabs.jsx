export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numTasks = 
                tab == 'All' ? todos.length : 
                tab == 'Open' ? todos.filter(val => !val.complete).length :
                                todos.filter(val => val.complete).length
                return (
                    <button onClick={() => { 
                        setSelectedTab(tab)
                    }} key={tabIndex} className={"tab-button " + (tab == selectedTab ? 'tab-selected' : '')}>
                        <h4>{tab} 
                            <span> ({numTasks})</span>
                        </h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}