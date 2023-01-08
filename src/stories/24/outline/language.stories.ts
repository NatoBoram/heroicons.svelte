import type { Meta, StoryObj } from '@storybook/svelte'
import { Language as LanguageSvelte } from '../../../lib/heroicons/24/outline'

const meta = {
	title: 'Heroicons/Outline',
	component: LanguageSvelte,
	args: { class: 'w-6 h-6' },
} satisfies Meta<LanguageSvelte>

export default meta
type Story = StoryObj<typeof meta>

export const Language: Story = {}
