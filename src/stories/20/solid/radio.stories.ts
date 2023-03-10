import type { Meta, StoryObj } from '@storybook/svelte'
import RadioSvelte from '../../../lib/20/solid/radio.svelte'

const meta = {
	title: 'Heroicons/Mini',
	component: RadioSvelte,
	args: { class: 'w-5 h-5' },
} satisfies Meta<RadioSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Radio: Story = {}
