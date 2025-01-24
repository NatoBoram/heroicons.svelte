<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PercentBadgeSvelte from '../../../lib/20/solid/percent-badge.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PercentBadgeSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PercentBadge" />
