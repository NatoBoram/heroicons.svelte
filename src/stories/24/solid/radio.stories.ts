import type { Meta, StoryObj } from '@storybook/svelte'
import { Radio as RadioSvelte } from '../../../lib/24/solid'

const meta = {
	title: 'Heroicons/Solid',
	component: RadioSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<RadioSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Radio: Story = {}
