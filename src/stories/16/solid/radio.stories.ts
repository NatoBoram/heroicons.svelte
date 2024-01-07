import type { Meta, StoryObj } from '@storybook/svelte'
import RadioSvelte from '../../../lib/16/solid/radio.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: RadioSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<RadioSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Radio: Story = {}
