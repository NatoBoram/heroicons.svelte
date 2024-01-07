import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneXMarkSvelte from '../../../lib/16/solid/phone-x-mark.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: PhoneXMarkSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<PhoneXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneXMark: Story = {}
