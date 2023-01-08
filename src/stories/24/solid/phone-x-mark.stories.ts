import type { Meta, StoryObj } from '@storybook/svelte'
import { PhoneXMark as PhoneXMarkSvelte } from '../../../lib/heroicons/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: PhoneXMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneXMark: Story = {}
