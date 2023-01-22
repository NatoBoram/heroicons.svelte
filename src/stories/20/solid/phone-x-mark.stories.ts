import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneXMarkSvelte from '../../../lib/20/solid/phone-x-mark.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: PhoneXMarkSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<PhoneXMarkSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const PhoneXMark: Story = {}
