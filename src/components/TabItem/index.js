import './index.css'

function TabItem(props) {
  const {eachTab, onClickTab, activeTabId} = props
  const clickTab = () => {
    onClickTab(eachTab.tabId)
  }

  const activeTabClass =
    eachTab.tabId === activeTabId ? `tab-item-name active-tab` : 'tab-item-name'
  return (
    <li>
      <button type="button" className={activeTabClass} onClick={clickTab}>
        {eachTab.displayText}
      </button>
    </li>
  )
}
export default TabItem
