import type { Meta, StoryObj } from '@storybook/svelte'
import RadioSvelte from '../../../lib/24/outline/radio.svelte'

const meta = {
	title: 'Heroicons/Outline',
	component: RadioSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RadioSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Radio: Story = {}
