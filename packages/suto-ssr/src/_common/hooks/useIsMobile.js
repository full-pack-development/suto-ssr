import { useWindowSize } from '_common/hooks/useWindowSize'

const WIDTH_SM = 640
export const useIsMobile = () => {
  const { width } = useWindowSize()
  return width < WIDTH_SM
}
