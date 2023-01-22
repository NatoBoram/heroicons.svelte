import type { Meta, StoryObj } from '@storybook/svelte'
import PhoneSvelte from '../../../lib/24/outline/phone.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: PhoneSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<PhoneSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Phone: Story = {}
