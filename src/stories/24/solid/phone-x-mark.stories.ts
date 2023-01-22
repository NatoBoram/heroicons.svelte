import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneXMarkSvelte from '../../../lib/24/solid/phone-x-mark.svelte'

const meta = {
	title: 'Heroicons/Solid',
	component: PhoneXMarkSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneXMark: Story = {}
