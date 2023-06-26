export const walletShortFormer = (wallet) => {
    return `${wallet?.slice(0, 7)}...${wallet?.slice(wallet?.length - 5, wallet?.length)}`
}
