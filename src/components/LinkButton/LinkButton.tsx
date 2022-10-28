import { Link, LinkProps } from 'react-router-dom'
import { Button } from '../Button'

export type ButtonProps = {
    disabled?: boolean
} & React.PropsWithChildren &
    LinkProps

export const LinkButton: React.FC<ButtonProps> = ({ children, disabled, to, ...props }) => {
    return (
        <>
            {disabled ? (
                <Button disabled={disabled}>{children}</Button>
            ) : (
                <Link {...props} to={disabled ? '' : to}>
                    <Button disabled={disabled}>{children}</Button>
                </Link>
            )}
        </>
    )
}
