<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import CheckBadgeSvelte from '../../../lib/20/solid/check-badge.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: CheckBadgeSvelte,
		args: { class: '' },
	})
</script>

<Story name="CheckBadge" />
