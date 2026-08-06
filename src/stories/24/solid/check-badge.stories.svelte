<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckBadgeSvelte from '../../../lib/24/solid/check-badge.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: CheckBadgeSvelte,
		args: { class: '' },
	})
</script>

<Story name="CheckBadge" />
