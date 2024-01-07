import type { Meta, StoryObj } from '@storybook/svelte'
import FaceFrownSvelte from '../../../lib/16/solid/face-frown.svelte'

const meta = {
	title: 'Heroicons/Micro',
	component: FaceFrownSvelte,
	args: { class: 'w-4 h-4' },
} satisfies Meta<FaceFrownSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const FaceFrown: Story = {}
