import styles from '../styles/Home.module.css'

// This header either displays a connect button or account info if connected (Or an Install MM button if user doesn't have it)
// IMPORTANT: It uses separate account and connectButton variables to avoid flashing button when switching network
// - account is either null or the public address of connected account
// - connectButton is true or false depending if we connected yet
// - hasMetaMask is true or false depending if the user has MetaMask
// - connectMeta is the function to connect with MetaMask

function ConnectHeader({account, connectButton, hasMetaMask, connectMeta}) {
	return (
		<div className={styles.connectDiv}>
			{account && 
				(
					<>
						<h2>Connected with account: </h2>
						<p>{account}</p>
					</>
				)
			}
			{connectButton &&
				(
			<div className="justify-end card-actions">
				<button
				className="btn btn-secondary"
				onClick={connectMeta}>
				<a href="#">Click to connect</a>
				</button>
			</div>
				)
			}
			{!hasMetaMask &&
				(
			<div className="justify-end card-actions">
				<button className="btn btn-secondary">
				<a href="https://metamask.io/">
					Install MetaMask
				</a>
				</button>
			</div>
				)
			}
		</div>
	)
}

export default ConnectHeader;