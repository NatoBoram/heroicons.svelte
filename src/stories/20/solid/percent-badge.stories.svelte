<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PercentBadgeSvelte from '../../../lib/20/solid/percent-badge.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PercentBadgeSvelte,
		args: { class: '' },
	})
</script>

<Story name="PercentBadge" />
