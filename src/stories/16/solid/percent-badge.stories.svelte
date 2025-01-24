<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PercentBadgeSvelte from '../../../lib/16/solid/percent-badge.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PercentBadgeSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PercentBadge" />
