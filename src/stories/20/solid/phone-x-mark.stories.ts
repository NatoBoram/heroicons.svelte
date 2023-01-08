import type { Meta, StoryObj } from '@storybook/svelte'
import { PhoneXMark as PhoneXMarkSvelte } from '../../../lib/heroicons/20/solid'

const meta = {
	title: 'Mini',
	component: PhoneXMarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PhoneXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneXMark: Story = {}
