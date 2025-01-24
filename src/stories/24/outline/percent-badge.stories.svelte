<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PercentBadgeSvelte from '../../../lib/24/outline/percent-badge.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: PercentBadgeSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PercentBadge" />
